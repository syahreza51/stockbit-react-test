import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ search, page }) => {
    const response = await axios.get(
      `${API_URL}/?apikey=${API_KEY}&s=${search}&page=${page}`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    totalResults: 0,
    loading: false,
    page: 1,
    search: "Batman",
  },
  reducers: {
    resetMovies: (state, action) => {
      state.list = [];
      state.page = 1;
      state.search = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.Response === "True") {
          state.list = [...state.list, ...action.payload.Search];
          state.totalResults = parseInt(action.payload.totalResults);
        }
      });
  },
});

export const { resetMovies, incrementPage } = movieSlice.actions;
export default movieSlice.reducer;
