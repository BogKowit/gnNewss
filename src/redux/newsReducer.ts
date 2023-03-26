import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Typy stanu
export type NewsState = {
  data: Array<any>;
  loading: boolean;
  error: string | null;
};

// Stan początkowy
const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
};

// Definicja slice'a
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

// Eksport reducer'a oraz akcji
export const { setNewsData, setNewsError, setNewsLoading } = newsSlice.actions;
export default newsSlice.reducer;