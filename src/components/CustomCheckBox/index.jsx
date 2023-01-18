import { useState } from "react"

const CustomCheckBox = ({ task }) => {
  const {description, checked} = task;
  const [ischecked, setChecked] = useState(checked);

  const handleChange = () => {
    setChecked(!ischecked);
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