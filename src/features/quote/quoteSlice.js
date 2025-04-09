import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../api/asyncQuoteAction.js";

const quoteSlice = createSlice({
    name: "quote",
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, () => 'Pending...')
            .addCase(fetchQuote.rejected, () => 'Failed to fetch quote data!')
            .addCase(fetchQuote.fulfilled, (state, action) => action.payload)
    }
})

export default quoteSlice.reducer;