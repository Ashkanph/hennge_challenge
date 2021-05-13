import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui/uiSlice";

export default configureStore({
    reducer: {
        ui: uiReducer,
    },
});
