import CustomCheckBox from "../CustomCheckBox";
import { Title } from './style';

function AccordionItem({ item }) {
  const { name, tasks } = item;
  const onChangeCheckValue = (onChangeTask, index) => {
    console.log('test',onChangeTask, index)
  }
  // use composition return different header and put into the code
  const allTasksChecked = tasks.every(section => 
    section.checked
  );

  return (
    <div>
      {allTasksChecked ? <Title>{name}</Title> : <h1>{name}</h1>}
      {tasks.map((task, index) => (<CustomCheckBox key={index} task={task} onChangeCheckValue={onChangeCheckValue}/>) )}
    </div>
  )
}
  
export default AccordionItem;