import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const defaultTask = {
  title: '',
  description: '',
};

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState(defaultTask);

  const onFormChange = (event) => {
    const stateTitle = event.target.name;
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
      <label htmlFor="title">Task</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onFormChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={onFormChange}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

NewTaskForm.propTypes = { addTaskCallback: PropTypes.func.isRequired };

export default NewTaskForm;
