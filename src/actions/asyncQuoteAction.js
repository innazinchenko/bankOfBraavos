import {addQuote} from "../features/quote/quoteSlice.js";

export const fetchQuote = () => {
    return dispatch => {
        dispatch(addQuote('Pending...'));
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(res => res.json())
            .then(data => dispatch(addQuote(data.sentence)))
            .catch(() =>dispatch(addQuote('Failed to fetch quotes')));
    }
}