import { useEffect, useState } from "react"
import TASK_API from "../../api/AccordionApi"
import Accordion from "../../components/Accordion"
import ProgressBar from "../../components/ProgressBar"
import { Container } from "./style"

function TaskManagement({ header }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchAccordion();
  }, [])

  const fetchAccordion = async () => {
    try {
      let response = await fetch(TASK_API);
      let data = await response.json();
      setTasks(data);
      
    } catch(error) {
      console.log(`Error: ${error}`);
    }
  } 

  return(
  <Container>
    <h1>{header}</h1>
    <ProgressBar tasks={tasks}/>
    <Accordion tasks={tasks}/>
  </Container>
  )
}

export default TaskManagement