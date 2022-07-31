import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { News } from "../../typings";
import axios from "axios";

export const getHeadlines = createAsyncThunk(
  "news/fetchHeadlines",
  async (_, thunkAPI) => {
    try {
      const response = axios.get(
        `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_API_KEY}&locale=nz`
      );
      const data = (await response).data.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getQueryNews = createAsyncThunk(
  "news/fetchQueryNews",
  async (query: string, thunkAPI) => {
    try {
      const response = axios.get(
        `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.REACT_APP_API_KEY}&search=${query}`
      );
      const data = (await response).data.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface NewsState {
  news: News[];
  loading: boolean;
  error: any;
}

const initialState: NewsState = {
  loading: false,
  news: [],
  error: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },
  },
  //fetching lifecycle
  extraReducers: (builder) => {
    //promise pending
    builder.addCase(getHeadlines.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getQueryNews.pending, (state) => {
      state.loading = true;
    });
    //promise fulfilled
    builder.addCase(getHeadlines.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(getQueryNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });

    //promise fulfilled
    builder.addCase(getHeadlines.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(getQueryNews.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setNews } = newsSlice.actions;

//export const selectNews = (state: RootState) => state.news.value

export default newsSlice.reducer;
