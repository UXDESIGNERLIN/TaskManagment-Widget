function CustomCheckBox({ task, toggleCheckbox, taskIndex, item }) {
  const {description} = task;

  const handleChange = () => {
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