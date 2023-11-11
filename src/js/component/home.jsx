import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div id="todo-list">
      <h1>To do list</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && addTask()}
      />
      <ul id="task-list">
        {tasks.length === 0 ? (
          <p id="no-tasks">No tasks, add a task</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <span className="delete-task" onClick={() => deleteTask(index)}>
                ❌
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
