import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await axios.get('https://api.itbook.store/1.0/search/nelson');
    return response.data.books
  });
  //Search Book
  export const searchBooks = createAsyncThunk('books/searchBooksByAuthor', async (search) => {
    const response = await axios.get(`https://api.itbook.store/1.0/search/${search}`);
    return response.data.books;
  });
  // Define the initial state
  const initialState = {
    books: [],
    loading: false,
    error: null,
  };
  
  // Define a slice for managing books
  const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchBooks.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
          state.loading = false;
          state.books = action.payload;
          state.error = null;
          
        })
        .addCase(fetchBooks.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(searchBooks.pending, (state) => {
          state.loading = true;
        })
        .addCase(searchBooks.fulfilled, (state, action) => {
          state.loading = false;
          state.books = action.payload;
          state.error = null;
        })
        .addCase(searchBooks.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  export const filterBooksByPrice=booksSlice.actions;
  export default booksSlice.reducer;