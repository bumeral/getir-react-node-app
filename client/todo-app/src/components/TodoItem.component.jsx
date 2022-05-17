import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { deleteTodoAsync } from '../state/todoSlice';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ id, index, title }) => {
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`}
        >
          <span className="todos__single--text">{title}</span>
          <div>
            <span className="icon__delete" onClick={() => handleDelete(id)}>
              <AiFillDelete />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default TodoItem;
