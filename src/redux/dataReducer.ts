import { createSlice } from "@reduxjs/toolkit";
import { fetchDataNewsByCountry } from "../utils/fetchDataNewsByCountry";
import { RootState } from "./RootState";

interface SwitchState {
  isCard: boolean;
}

const initialState: SwitchState = {
  isCard: false,
};

export const switchSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    switchCard: (state) => {
      state.isCard = !state.isCard;
    },
    fetchData: (state) => {
      state;
      fetchDataNewsByCountry();
    },
  },
});

export const { switchCard } = switchSlice.actions;

export default switchSlice.reducer;
