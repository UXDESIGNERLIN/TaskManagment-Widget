import './App.css';
import TaskManagement from './widgets/TaskManagement';

function App() {
  const header = 'Lodgify Grouped Tasks'
  return (
    <div className="App">
      <TaskManagement header={header}/>
    </div>
  );
}

export default App;
