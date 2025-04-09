import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
    'quote/fetch',
    async () => {
        const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        const data = await response.json();
        return data.sentence;
    }
)




// import {addQuote} from "../quote/quoteSlice.js";
//
// export const fetchQuote = () => {
//     return dispatch => {
//         dispatch(addQuote('Pending...'));
//         fetch('https://api.gameofthronesquotes.xyz/v1/random')
//             .then(res => res.json())
//             .then(data => dispatch(addQuote(data.sentence)))
//             .catch(() =>dispatch(addQuote('Failed to fetch quotes')));
//     }
// }