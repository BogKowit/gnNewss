import { createSlice } from '@reduxjs/toolkit';

interface SwitchState {
  isCard: boolean;
}

const initialState: SwitchState = {
  isCard: false,
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    switchCard: (state) => {
      state.isCard = !state.isCard;
    },
  },
});

export const { switchCard } = switchSlice.actions;

export default switchSlice.reducer;