import AccordionItem from "../AccordionItem";

const Accordion = ({ items }) => {
  console.log('render accordion', items)
  return (
    <div>
      {items.map((item, index) => (<AccordionItem key={index} item={item} />))}
    </div>
  )
}

export default Accordion;