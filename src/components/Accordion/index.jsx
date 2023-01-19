import AccordionItem from "../AccordionItem";

function Accordion({ tasks }) {

  return (
    <div>
      {tasks.map((task, index) => (<AccordionItem key={index} item={task} />))}
    </div>
  )
}

export default Accordion;