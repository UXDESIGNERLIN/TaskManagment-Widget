import { useEffect, useState } from "react"
import TASK_API from "../../api/AccordionApi"
import Accordion from "../../components/Accordion"
import ProgressBar from "../../components/ProgressBar"
import { Container } from "./style"

const TaskManagement = ({ header }) => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchAccordion();
  }, [])

  const fetchAccordion = async () => {
    try {
      let response = await fetch(TASK_API);
      let data = await response.json();
      setItems(data);
      
    } catch(error) {
      console.log(`Error: ${error}`);
    }
  } 

  return(
  <Container>
    <h1>{header}</h1>
    <ProgressBar />
    <Accordion items={items}/>
  </Container>
  )
}

export default TaskManagement