import { useState } from "react"

function CustomCheckBox({ task, toggleCheckbox, index }) {
  const {description} = task;
  const [onChangedTask, setOnChangedTask] = useState(task);

  const handleChange = () => {
    setOnChangedTask(prevTask => {
      toggleCheckbox({...prevTask, checked: !prevTask.checked}, index);
      return {...prevTask, checked: !prevTask.checked};
    }); 
  };

  return(
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={onChangedTask.checked}
          onChange={handleChange}
        />
        {description}
      </label>
    </div>  
  ) 
}

export default CustomCheckBox;