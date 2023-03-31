import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsReducer";
import uiReducer from "./uiReducer";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;