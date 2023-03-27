import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataTypes } from "../types";

export type NewsState = {
  data: Array<DataTypes>;
  loading: boolean;
  error: string | null;
};

const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsData: (state, action: PayloadAction<Array<any>>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setNewsError: (state, action: PayloadAction<string>) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
    setNewsLoading: (state) => {
      state.data = [];
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setNewsData, setNewsError, setNewsLoading } = newsSlice.actions;
export default newsSlice.reducer;