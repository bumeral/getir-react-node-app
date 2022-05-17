import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../state/todoSlice';
import '../assets/css/styles.css';

const AddNewTodo = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodoAsync({
          title: value,
        }),
      );
      setValue('');
    }
  };
  // lose blur on keypress
  const onKeyPressEvent = (event) => {
    if (event.keyCode === 13) {
      inputRef.current?.blur();
      handleSubmit(event);
    }
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a New Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input__box"
        onKeyDown={onKeyPressEvent}
        ref={inputRef}
      />
      <button type="submit" className="input_submit">
        ADD
      </button>
    </form>
  );
};

export default AddNewTodo;
