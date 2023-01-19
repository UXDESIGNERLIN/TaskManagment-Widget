import { useEffect, useState } from "react"
import TASK_API from "../../api/AccordionApi"
import Accordion from "../../components/Accordion"
import AccordionItem from "../../components/AccordionItem"
import CustomCheckBox from "../../components/CustomCheckBox"
import ProgressBar from "../../components/ProgressBar"
import { Container } from "./style"

function TaskManagement({ header }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      let response = await fetch(TASK_API);
      let data = await response.json();
      setData(data);
      
    } catch(error) {
      console.log(`Error: ${error}`);
    }
  } 
  
  const updateTaskCheckedValue = ({ checked }, index, { name }) => {
    const newData = data.map(item => {
        return {
          ...item,
          tasks: item.tasks.map((task, i) => {
            if (item.name === name && i === index) {
              return {
                ...task,
                checked
              };
            }
            return task;
          })
        };
    });
    return newData;
  } 
  

  const toggleCheckbox = (task, index, item) => {
    setData(
      updateTaskCheckedValue(task, index, item)
    )
  }

  return(
    <Container>
      <h1>{header}</h1>
      <ProgressBar tasks={data}/>
      <Accordion>
        {data.map((item, index) => (
          <AccordionItem 
            key={index} 
            itemIndex={index} 
            item={item}
          >
            <h2>{item.name}</h2>
            {item.tasks.map((task, index) => (
              <CustomCheckBox 
                key={index} 
                taskIndex={index} 
                item={item} 
                task={task} 
                toggleCheckbox={toggleCheckbox}
              >
              </CustomCheckBox>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}

export default TaskManagement