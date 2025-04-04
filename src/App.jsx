import {useState} from 'react'
import './App.css'
import Operation from "./components/Operation.jsx";
import Balance from "./components/Balance.jsx";

function App() {
    const [balance, setBalance] = useState(0)

    const deposit = sum => setBalance(prevBalance => prevBalance + sum);

    const withdraw = sum => setBalance(prevBalance => prevBalance < sum ? prevBalance: prevBalance - sum);

    return (

        <div>
            <Balance balance={balance}/>
            <Operation deposit={deposit} withdraw={withdraw}/>
        </div>
    )
}

export default App
