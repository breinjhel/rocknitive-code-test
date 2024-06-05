import React, { useState } from 'react';
import useCryptoPrice from './hooks/useCryptoPrice';

const App: React.FC = () => {
    const [symbol, setSymbol] = useState('bitcoin');
    const data = useCryptoPrice(symbol);

    return (
        <div>
            <nav>
                <button onClick={() => setSymbol('bitcoin')}>BTC</button>
                <button onClick={() => setSymbol('ethereum')}>ETH</button>
                <button onClick={() => setSymbol('dogecoin')}>DOGE</button>
            </nav>
            <div>
                <h1>{symbol.toUpperCase()}</h1>
                <p>Latest Price: €{data.latest}</p>
                <p>Average Price: €{data.average}</p>
                <h2>Price History</h2>
                <ul>
                    {data.history.map((price, index) => (
                        <li key={index}>€{price}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
