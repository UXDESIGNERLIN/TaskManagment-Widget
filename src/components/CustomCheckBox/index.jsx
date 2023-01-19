import { useState } from "react"

function CustomCheckBox({ onChangeCheckValue, task, index }) {
  const {description, checked} = task;
  const [ischecked, setChecked] = useState(checked);

  const handleChange = () => {
    setChecked(!ischecked);
    onChangeCheckValue(task, index)
  };

  return(
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={ischecked}
          onChange={handleChange}
        />
        {description}
      </label>
    </div>  
  ) 
}

export default CustomCheckBox;