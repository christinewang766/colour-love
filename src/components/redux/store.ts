import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import colourReducer from "./colourSlice";

/** REDUCERS */
export default configureStore({
    reducer: {
        user: userReducer,
        colour: colourReducer
    },
});