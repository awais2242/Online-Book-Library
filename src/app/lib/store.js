import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/book/bookSlice";
import userReducer from "./features/book/loginSlice";
export default configureStore({
    reducer: {
      books: booksReducer,
      user: userReducer,
    },
  });