import React, { useState } from "react";

function Form() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = event.target.elements.task.value;
    setTasks([...tasks, newTask]);
    event.target.elements.task.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
      
          <input type="text" name="task" />
        </label>
        <button type="submit">Add</button>
      </form>
      
        {tasks.map((task, index) => (
        <ul key={index}>{task}</ul>
           
        ))}
      
    </div>
  );
}

export default Form;

