import { createSlice } from "@reduxjs/toolkit";

/** STATES: represent various colour palette options {random, red, green, blue} */
const colourState = createSlice({
  name: "colourState",
  initialState: {
    colour: "not set",
  },
  reducers: {
    random: (state) => {
      state.colour = "random";
    },
    red: (state) => {
      state.colour = "red";
    },
    green: (state) => {
      state.colour = "green";
    },
    blue: (state) => {
      state.colour = "blue";
    },
  },
});

export const { random, red, green, blue } = colourState.actions;

export default colourState.reducer;
