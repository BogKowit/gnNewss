import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// interface StateModifiers {
//   openSidebar: () => void;
//   closeSidebar: () => void;
// }

interface StateValues {
  isSidebarOpen: boolean;
}

const initialState: StateValues = { isSidebarOpen: false };

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = uiSlice.actions;

export const selectUIState = (state: RootState) => state.ui;

export default uiSlice.reducer;