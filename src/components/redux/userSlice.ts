import {createSlice} from "@reduxjs/toolkit";

/** STATES: represent the user logged in/out */
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
    },
});

export const {loginUser, logoutUser} = userSlice.actions;
export const selectUser = (state: { user: { user: string; }; }) => state.user.user;
export default userSlice.reducer;