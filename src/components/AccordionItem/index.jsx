import CustomCheckBox from "../CustomCheckBox";

const AccordionItem = ({ item }) => {
  const { name, tasks } = item;
  return (
    <div>
      <h1>{name}</h1>
      {tasks.map((task, index) => (<CustomCheckBox key={index} task={task}/>) )}
    </div>
  )
}
  
export default AccordionItem;