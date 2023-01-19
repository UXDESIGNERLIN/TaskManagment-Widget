import { Progress, Bar } from './style'
function ProgressBar({ tasks }) {

  const sumValues = (data, sumCheckedOnly) => {
    return data.reduce((total, category) => {
      return total + category.tasks.reduce((subTotal, task) => {
        if(sumCheckedOnly) {
          return task.checked ? subTotal + task.value : subTotal;
        }
        else return subTotal + task.value;
      }, 0);
    }, 0);
  }
  
  const sumAllValues = sumValues(tasks);

  const sumCheckedValues = sumValues(tasks, true);

  const progress = ((sumCheckedValues * 100) / sumAllValues).toFixed(2);

  return(
    <>
    <Progress>
      <Bar role="progressbar" progress={progress} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</Bar>
    </Progress>
    </>
  )
}

export default ProgressBar;