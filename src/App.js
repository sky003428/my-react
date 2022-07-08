import './App.css';
import { useState } from 'react';

function App() {
    const [total, setTotal] = useState(0);

    return (
        <div className="App">
            <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
        </div>
    );
}

export default App;
