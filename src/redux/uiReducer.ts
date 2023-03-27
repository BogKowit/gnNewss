import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface StateValues {
  isSidebarOpen: boolean;
  isCard: boolean;
}

const initialState: StateValues = {
  isSidebarOpen: false,
  isCard: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    switchCard: (state) => {
      state.isCard = !state.isCard;
    },
  },
});

export const { openSidebar, closeSidebar, switchCard } = uiSlice.actions;

export const selectUIState = (state: RootState) => state.ui;

export default uiSlice.reducer;
