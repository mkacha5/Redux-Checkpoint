import { createSlice } from "@reduxjs/toolkit";

const getStoredTodoList = () => {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [
        { id: 1, description: "Learn HTML", isDone: false },
        { id: 2, description: "Learn CSS", isDone: false },
        { id: 3, description: "Learn JS", isDone: false },
        { id: 4, description: "Learn ES6", isDone: true },
        { id: 5, description: "Learn React", isDone: true },
      ];
};

const storeTodoList = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const Todoslice = createSlice({
  name: "todolist",
  initialState: {
    todos: getStoredTodoList(),
    current: null,
  },
  reducers: {
    ADD_TASK: (state, payload) => {
      state.todos.push(payload.payload);
      storeTodoList(state.todos);
    },
    UPDATE_TASK: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.description }
          : todo
      );
      storeTodoList(state.todos);
    },
    DELETE_TASK: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      storeTodoList(state.todos);
    },
    SET_CURRENT_TASK: (state, action) => {
      state.current = action.payload;
    },
    TOGGLE_COMPLETED_TASK: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      storeTodoList(state.todos);
    },
  },
});

export const {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} = Todoslice.actions;
export default Todoslice.reducer;
