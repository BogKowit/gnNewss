import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";
import switchReducer from "./switchReducer";
import uiReducer from "./uiReducer";

export const store = configureStore({
  reducer: {
    article: dataReducer,
    ui: uiReducer,
    switch: switchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
