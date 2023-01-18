import { Progress, Bar } from './style'
const ProgressBar = ({ariaValuenow}) => {
  return(
    <>
    <Progress>
      <Bar role="progressbar" percentage={ariaValuenow} aria-valuenow={ariaValuenow} aria-valuemin="0" aria-valuemax="100">25</Bar>
    </Progress>
    </>
  )
}

export default ProgressBar;