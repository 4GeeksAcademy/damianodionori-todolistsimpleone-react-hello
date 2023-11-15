// TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');


  const addTask = () => {
    if (taskInput.trim() !== '') { //checking if the result is not an empty string
      setTasks([...tasks, taskInput]); //creates a new array with all existing tasks plus the new one
      setTaskInput(''); //prepares the input field for the user to add another task
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // checks the index of each task and keeps only those where the index is not equal to the index parameter
  };

  return (
    <body>
      <h1>Things to do</h1>
      <div className='paper'>
        <div className='lines'>
          <div className='contentEditable'>
            <input
              type="text"
              placeholder="Add a new task"
              value={taskInput} // bind the input field's value to the taskInput state variable
              onChange={(e) => setTaskInput(e.target.value)} // updates the taskInput state using setTaskInput
              onKeyUp={(e) => e.key === 'Enter' && addTask()} //if the Enter key was pressed the addTask function is called
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
            {tasks.length > 0 && ( //if the array length is not greater than 0 nothing is rendered
              <div className="item-count">
                {tasks.length === 1 ? `1 item left` : `${tasks.length} items left`}
              </div>// if the array length is equal to 1 the first case is rendered, otherwise the second one using a ternary
            )}
          </div>
        </div>
        <div className="holes">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
      </div>
    </body>
  );
};

export default TodoList;
