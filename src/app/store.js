import {configureStore} from "@reduxjs/toolkit";
import balance from "../features/balanceSlice.js";
import quote from "../features/quote/quoteSlice.js";

export const store = configureStore({
    reducer: {
        balance, quote
    },
})