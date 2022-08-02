import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Widget } from "../../typings";
import axios from "axios";

export const getTrending = createAsyncThunk(
  "widgets/fetchTrending",
  async (_, thunkAPI) => {
    try {
      const response = axios.get(
        `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_THENEWS_KEY}&locale=nz`
      );
      const data = (await response).data.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface WidgetState {
  widget: Widget[];
  loading: boolean;
  error: any;
}

const initialState: WidgetState = {
  loading: false,
  widget: [],
  error: null,
};

export const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    setWidget: (state, action: PayloadAction<Widget[]>) => {
      state.widget = action.payload;
    },
  },
  //fetching lifecycle
  extraReducers: (builder) => {
    //promise pending
    builder.addCase(getTrending.pending, (state) => {
      state.loading = true;
    });

    //promise fulfilled
    builder.addCase(getTrending.fulfilled, (state, action) => {
      state.loading = false;
      state.widget = action.payload;
    });

    //promise fulfilled
    builder.addCase(getTrending.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setWidget } = widgetSlice.actions;

//export const selectNews = (state: RootState) => state.news.value

export default widgetSlice.reducer;
