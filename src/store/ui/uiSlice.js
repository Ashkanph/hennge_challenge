import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => ({
    language: "en",
    theme: "light",
});

export const uiSlice = createSlice({
    name: "ui",
    initialState: getInitialState(),
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action?.payload;
        },
        changeTheme: (state, action) => {
            state.theme = action?.payload;
        },
    },
});

export const { changeLanguage, changeTheme } = uiSlice.actions;

export default uiSlice.reducer;
