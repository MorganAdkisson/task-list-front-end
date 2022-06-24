import { useState } from 'react';
import React from 'react';

const defaultTask = {
  // id: '',
  title: '',
  iscomplete: true,
};

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState(defaultTask);

  const onFormChange = (event) => {
    const stateTitle = event.target.title;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateTitle] = inputValue;

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addTaskCallback(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task</label>
      <input
        type="text"
        title="title"
        value={formData.title}
        onChange={onFormChange}
      />
      <label htmlFor="iscomplete">Complete?</label>
      <input
        type="text"
        iscomplete="something here"
        value={formData.iscomplete}
        onChange={onFormChange}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
