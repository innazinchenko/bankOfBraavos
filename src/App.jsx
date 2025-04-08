import './App.css'
import Operation from "./components/Operation.jsx";
import Balance from "./components/Balance.jsx";

function App() {

    return (
        <div className={'container'}>
            <Balance/>
            <Operation/>
        </div>
    )
}

export default App
