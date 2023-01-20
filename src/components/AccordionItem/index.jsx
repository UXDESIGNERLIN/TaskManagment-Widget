import { useState } from 'react';
import { Title, Wrapper, Pannel, ClickingPannel, Arrow } from './style';

function AccordionItem({ children, item }) {
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
      <ClickingPannel onClick={togglePannel}>
        <Title allTasksChecked={allTasksChecked}>{name}</Title> 
        <Arrow expand={expand}></Arrow>
      </ClickingPannel>
      <Pannel expand={expand}>{children}</Pannel>
    </Wrapper>
  ) 
}
  
export default AccordionItem;