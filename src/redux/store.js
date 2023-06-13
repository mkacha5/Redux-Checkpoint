import { configureStore } from "@reduxjs/toolkit";
import todolist from "./Todoslice"
export const store = configureStore({
    reducer:{
        todolist:todolist,
    },
}) 