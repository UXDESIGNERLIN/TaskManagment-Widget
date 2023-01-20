import { useState } from 'react';
import { Title, Wrapper, Pannel } from './style';

function AccordionItem({ children, item, itemIndex }) {
  const [expand, setExpand] = useState(false);
  const { tasks, name } = item;

  const allTasksChecked = tasks.every(section => 
    section.checked
  );  

  const togglePannel = () => {
    setExpand(!expand);
  }

  return ( 
    <Wrapper>
      <button onClick={togglePannel}>
        {allTasksChecked ? 
          <Title>{name}</Title> : 
          <h3>{name}</h3>
        }
        <span>{expand ? 'Show' : 'Hide'}</span>
      </button>
      <Pannel expand={expand}>{children}</Pannel>
    </Wrapper>
  ) 
}
  
export default AccordionItem;