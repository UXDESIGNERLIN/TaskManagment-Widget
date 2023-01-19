import { Progress, Bar } from './style'
const ProgressBar = ({ tasks }) => {

  const sumAllValues = (data) => {
    return data.reduce((total, category) => {
      return total + category.tasks.reduce((subTotal, task) => {
        return subTotal + task.value;
      }, 0)
    }, 0) 
  }

  const sumCheckedValues = (data) => {
    return data.reduce((total, category) => {
      return total + category.tasks.reduce((subTotal, task) => {
        return task.checked ? subTotal + task.value : subTotal;
      }, 0);
    }, 0);
  }

  const progress = ((sumCheckedValues * 100) / sumAllValues).toFixed(2);




  return(
    <>
    <Progress>
      <Bar role="progressbar" percentage={percentage} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">25</Bar>
    </Progress>
    </>
  )
}

export default ProgressBar;