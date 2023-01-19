import { useState } from "react"

function CustomCheckBox({ task, toggleCheckbox, taskIndex, item }) {
  const {description} = task;
  //const [onChangedTask, setOnChangedTask] = useState(task);

  const handleChange = () => {
 /*    setOnChangedTask(prevTask => {
      toggleCheckbox({...prevTask, checked: !prevTask.checked}, index);
      return {...prevTask, checked: !prevTask.checked};
    }); */ 
    toggleCheckbox({...task, checked: !task.checked}, taskIndex, item);

  };

  return(
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={task.checked}
          onChange={handleChange}
        />
        {description}
      </label>
    </div>  
  ) 
}

export default CustomCheckBox;