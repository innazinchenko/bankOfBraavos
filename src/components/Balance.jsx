import {useSelector} from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.bank.balance);

    return (
        <div>
            <h1 className={'text-center text-uppercase'}>Iron Bank of Braavos</h1>
            <h2 className={'text-center text-uppercase'}>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;