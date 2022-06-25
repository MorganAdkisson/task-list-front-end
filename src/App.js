import React from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const URL = 'https://task-list-api-c17.herokuapp.com';

  const fetchTasks = () => {
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
  };

  useEffect(fetchTasks, []);

  const flipComplete = (id) => {
    // debugger; // eslint-disable-line no-debugger

    //   const taskObject = copiedTasks.find((task) => task.id === id);

    //   if (taskObject.isComplete) {
    //     axios
    //       .patch(`${URL}/tasks/${id}/mark_incomplete`)
    //       .then(() => {
    //         taskObject.iscomplete = !taskObject.iscomplete;
    //         setTasks(copiedTasks);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } else {
    //     axios
    //       .patch(`${URL}/tasks/${id}/mark_complete`)
    //       .then(() => {
    //         taskObject.iscomplete = !taskObject.iscomplete;
    //         setTasks(copiedTasks);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    // };
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

  const addTask = (taskInfo) => {
    axios
      .post(`${URL}/tasks`, taskInfo)
      .then((response) => {
        fetchTasks();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
          <NewTaskForm addTaskCallback={addTask} />
        </div>
      </main>
    </div>
  );
}

export default App;
