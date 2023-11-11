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
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div id="todo-list">
      <h1>TODO List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') addTask();
        }}
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
