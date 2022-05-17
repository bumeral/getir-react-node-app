import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_PRODUCTION : 'http://localhost:7000';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
  const resp = await fetch(`${BASE_URL}/todos`);
  if (resp.ok) {
    const todos = await resp.json();
    return { todos };
  }
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
  const resp = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: payload.title }),
  });

  if (resp.ok) {
    const todo = await resp.json();
    return { todo };
  }
});

export const toggleUpdateAsync = createAsyncThunk('todos/updateTodoAsync', async (payload) => {
  const resp = await fetch(`${BASE_URL}/todos/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: payload.status }),
  });

  if (resp.ok) {
    const todo = await resp.json();
    return { todo };
  }
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (payload) => {
  const resp = await fetch(`${BASE_URL}/todos/${payload.id}`, {
    method: 'DELETE',
  });

  if (resp.ok) {
    return { id: payload.id };
  }
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [toggleUpdateAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.todo.id);
      state[index].status = action.payload.todo.status;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
