import CustomCheckBox from "../CustomCheckBox";
import { Title } from './style';

function AccordionItem({ children, item  }) {
  const { tasks, name } = item;
  const allTasksChecked = tasks.every(section => 
    section.checked
  );  

  return ( 
    <div>
      {allTasksChecked ? 
        <Title>{name}</Title> : 
        <h1>{name}</h1>
      }
      {children}
    </div>
  ) 
}
  
export default AccordionItem;