import { useState } from "react"
import './todo.css'



function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date(), text: inputValue, completed: false }]);
      setPendingCount((count) => count + 1);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setPendingCount((count) => count - 1);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    setPendingCount((count) => count - 1);
  };

  return (
    <div>
        
        <div className="main">
        
<div className="input">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button id="submit" onClick={handleAddTask}>submit</button>
      <h1>Pending Task{pendingCount}</h1>
     </div>
     <div className="field">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button id="complete"onClick={() => handleCompleteTask(task.id)}>Complete</button>
            <button id="delete"onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul><br></br></div>
      </div>
    </div>
  );
}

export default TodoList;
