import { colors } from '../../styles/variables'

function CustomCheckBox({ task, toggleCheckbox, taskIndex, item }) {
  const {description} = task;

  const handleChange = () => {
    toggleCheckbox({...task, checked: !task.checked}, taskIndex, item);
  };

  const checkBoxSTyle = {
    accentColor: colors.darkerTheme,
  }

  return(
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={task.checked}
          onChange={handleChange}
          style={checkBoxSTyle}
        />
        {description}
      </label>
    </div>  
  ) 
}

export default CustomCheckBox;