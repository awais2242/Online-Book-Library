// loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
// Async thunk for logging in
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/user/login",
        credentials
      );
      const token = response.data.token;
      localStorage.setItem("user_token", token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//Async Thunk for sign up
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/user/register",
        userData
      );
      alert("User Register Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Slice for managing login state
const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false; // Assuming user is authenticated after registration
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
