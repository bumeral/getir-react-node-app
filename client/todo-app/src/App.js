import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from './state/todoSlice';
import { toggleUpdateAsync } from './state/todoSlice';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

// page components

import AddNewTodo from './components/AddNewTodo.component';
import TodoList from './components/TodoList.component';
import InfoBox from './components/InfoBox.component';

const App = () => {
  const [awaitingTasks, setAwaitingTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // fetch todos from api
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  // set awaiting, ongoing and completed todos
  useEffect(() => {
    setAwaitingTasks(todos.filter((todo) => todo.status === 'awaiting'));
    setOngoingTasks(todos.filter((todo) => todo.status === 'ongoing'));
    setCompletedTasks(todos.filter((todo) => todo.status === 'completed'));
  }, [todos]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    switch (destination.droppableId) {
      case 'awaitingTasks':
        dispatch(toggleUpdateAsync({ id: draggableId, status: 'awaiting' }));
        break;
      case 'ongoingTasks':
        dispatch(toggleUpdateAsync({ id: draggableId, status: 'ongoing' }));
        break;
      case 'completedTasks':
        dispatch(toggleUpdateAsync({ id: draggableId, status: 'completed' }));
        break;
      default:
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">My TO-DO LIST</span>
        <AddNewTodo />
        <InfoBox />
        <TodoList
          todos={todos}
          awaitingTasks={awaitingTasks}
          ongoingTasks={ongoingTasks}
          completedTasks={completedTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
