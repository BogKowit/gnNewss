import { configureStore} from "@reduxjs/toolkit";
import newsReducer from "./newsReducer";
import switchReducer from "./switchReducer";
import uiReducer from "./uiReducer";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    ui: uiReducer,
    switch: switchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
