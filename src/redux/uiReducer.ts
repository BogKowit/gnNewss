import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface StateValues {
  isOpenPopUp: boolean;
  isOpenPopUpAboutMe: boolean;
  isCard: boolean;
}

const initialState: StateValues = {
  isOpenPopUp: false,
  isOpenPopUpAboutMe: false,
  isCard: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openPopUp: (state) => {
      state.isOpenPopUp = true;
    },
    openPopUpAboutMe: (state) => {
      state.isOpenPopUpAboutMe = true;
    },
    closePopUps: (state) => {
      state.isOpenPopUpAboutMe = false;
      state.isOpenPopUp = false;
    },
    switchCard: (state) => {
      state.isCard = !state.isCard;
    },
  },
});

export const {
  openPopUp,
  switchCard,
  closePopUps,
  openPopUpAboutMe,
} = uiSlice.actions;

export const selectUIState = (state: RootState) => state.ui;

export default uiSlice.reducer;
