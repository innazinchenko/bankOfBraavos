import {configureStore} from "@reduxjs/toolkit";
import bankReducer from "../features/bankSlice.js";

export const store = configureStore({
    reducer: {
        bank: bankReducer
    }
});