import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  isloading: true,
  selectedTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTaskToTodoList: (state, action) => {
      state.todoList.push(action.payload);
      alert("task added!")
    },
  },
});

export const {addTaskToTodoList} = todoSlice.actions

export default todoSlice.reducer;
