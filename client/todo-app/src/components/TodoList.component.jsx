import React from 'react';
import TodoItem from './TodoItem.component';
import { Droppable } from 'react-beautiful-dnd';
import '../assets/css/styles.css';

const TodoList = ({ awaitingTasks, ongoingTasks, completedTasks }) => {
  return (
    <div className="container">
      <Droppable droppableId="awaitingTasks">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? 'dragAwaiting' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Awaiting</span>
            {awaitingTasks?.map((todo, index) => (
              <TodoItem
                id={todo.id}
                title={todo.title}
                isDone={todo.isDone}
                index={index}
                key={`${todo.title}-${todo.id}`}
                section="awaitingTasks"
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ongoingTasks">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${snapshot.isDraggingOver ? 'dragOngoing' : 'dragOngoing'}`}
          >
            <span className="todos__heading">Ongoing</span>
            {ongoingTasks?.map((todo, index) => (
              <TodoItem
                id={todo.id}
                title={todo.title}
                isDone={todo.isDone}
                index={index}
                key={`${todo.title}-${todo.id}`}
                section="ongoingTasks"
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="completedTasks">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${snapshot.isDraggingOver ? 'dragComplete' : 'dragCompleted'}`}
          >
            <span className="todos__heading">Completed</span>
            {completedTasks?.map((todo, index) => (
              <TodoItem
                id={todo.id}
                title={todo.title}
                isDone={todo.isDone}
                index={index}
                key={`${todo.title}-${todo.id}`}
                section="completedTasks"
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
