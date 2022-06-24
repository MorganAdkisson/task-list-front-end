import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const URL = 'https://task-list-api-c17.herokuapp.com';

  useEffect(() => {
    axios
      .get(`${URL}/tasks`)
      .then((response) => {
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const flipComplete = (id) => {
    const copiedTasks = [...tasks];
    let matchingTask;
    for (const task of copiedTasks) {
      console.log(task);
      if (task.id === id) {
        matchingTask = task;
      }
    }
    if (matchingTask.isComplete) {
      axios
        .patch(`${URL}/tasks/${id}/mark_incomplete`)
        .then(() => {
          matchingTask.isComplete = !matchingTask.isComplete;
          setTasks(copiedTasks);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .patch(`${URL}/tasks/${id}/mark_complete`)
        .then(() => {
          matchingTask.isComplete = !matchingTask.isComplete;
          setTasks(copiedTasks);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/tasks/${id}`)
      .then(() => {
        const newTasks = [];
        for (const task of tasks) {
          if (task.id !== id) {
            newTasks.push(task);
          }
        }
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            completeCallback={flipComplete}
            deleteCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
