import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../typings";
import axios from "axios";

interface NewsState {
  news: News[] | undefined;
  loading: boolean;
  error: any;
}

const initialState: NewsState = {
  loading: false,
  news: [],
  error: null,
};

export const getHeadlines = createAsyncThunk(
  "news/fetchHeadlines",
  async (_, thunkAPI) => {
    try {
      const options = {
        method: "GET",
        url: "https://free-news.p.rapidapi.com/v1/search",
        params: { q: "headlines" || "today", lang: "en" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY as string,
          "X-RapidAPI-Host": "free-news.p.rapidapi.com",
        },
      };
      const response = axios.request(options);
      const data = (await response).data.articles;

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
      const options = {
        method: "GET",
        url: "https://free-news.p.rapidapi.com/v1/search",
        params: { q: query, lang: "en" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY as string,
          "X-RapidAPI-Host": "free-news.p.rapidapi.com",
        },
      };
      const response = axios.request(options);
      const data = (await response).data.articles;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
