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
      alert("task added!");
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
    },
    markTaskDone: (state, action) => {
      let idx = state.todoList.findIndex((task) => {
        return task.id === action.payload;
      });
      console.log("item index is ", idx);
      if (idx >= 0) {
        if (state.todoList[idx].isCompleted) {
          state.todoList[idx].isCompleted = false;
        } else {
          state.todoList[idx].isCompleted = true;
        }
      }
      // state.todoList;
    },
  },
});

export const { addTaskToTodoList, deleteTask, markTaskDone } =
  todoSlice.actions;

export default todoSlice.reducer;
