import PropTypes from 'prop-types';
import React from 'react';
import './Task.css';

const Task = (props) => {
  const flipMyComplete = () => {
    props.completeCallback(props.id);
  };

  const deleteThisCallback = () => {
    props.deleteCallback(props.id);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        onClick={flipMyComplete}
        className={`tasks__item__toggle ${buttonClass}`}
      >
        {props.title}
      </button>
      <button
        onClick={deleteThisCallback}
        className="tasks__item__remove button"
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  completeCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
};

export default Task;
