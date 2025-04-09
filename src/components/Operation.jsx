import {useState} from "react";
import {useDispatch} from "react-redux";
import {deposit, withdraw} from "../features/balanceSlice.js";
import {addQuote} from "../features/quote/quoteSlice.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    const fetchQuote = () => {
        dispatch(addQuote('Pending...'));
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
        .then(res => res.json())
        .then(data => dispatch(addQuote(data.sentence)))
        .catch(() =>dispatch(addQuote('Failed to fetch quotes')));
    }

    return (
        <>
        <div className={'d-flex justify-content-center'}>
            <button
                className={'btn btn-primary btn-lg'}
                onClick={() => dispatch(withdraw(sum))}
            >Withdraw</button>
            <input
                className={'form-control-lg text-center'}
                type={'number'}
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button
                className={'btn btn-primary btn-lg'}
                onClick={() => dispatch(deposit(sum))}
            >Deposit</button>
        </div>

            <div className={'d-flex justify-content-center'}>
                <button
                    className={'btn btn-warning btn-lg'}
                    onClick={fetchQuote}
                > Get quote</button>
            </div>
        </>
    );
};

export default Operation;