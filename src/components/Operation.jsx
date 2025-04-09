import {useState} from "react";
import {useDispatch} from "react-redux";
import {deposit, withdraw} from "../features/account/balanceSlice.js";
import {fetchQuote} from "../features/api/asyncQuoteAction.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <>
            <div className={'d-flex justify-content-center'}>
                <button
                    className={'btn btn-primary btn-lg'}
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw
                </button>
                <input
                    className={'form-control-lg text-center'}
                    type={'number'}
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                />
                <button
                    className={'btn btn-primary btn-lg'}
                    onClick={() => dispatch(deposit(sum))}
                >Deposit
                </button>
            </div>
            <div className={'d-flex justify-content-center'}>
                <button
                    onClick={() => dispatch(fetchQuote())}
                    className={'btn btn-info btn-lg'}
                >Get Quote
                </button>
            </div>
        </>
    );
};

export default Operation;