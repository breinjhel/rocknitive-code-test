// src/server.ts

import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const prices: { [key: string]: number[] } = { bitcoin: [], ethereum: [], dogecoin: [] };

const fetchPrices = async () => {
    const coins = ['bitcoin', 'ethereum', 'dogecoin'];
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: coins.join(','),
                vs_currencies: 'eur',
            },
        });
        coins.forEach((coin) => {
            prices[coin].push(response.data[coin].eur);
            if (prices[coin].length > 60) prices[coin].shift();
        });
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
};

setInterval(fetchPrices, 60000);

app.get('/price/:symbol', (req, res) => {
    const { symbol } = req.params;
    const minutes = parseInt(req.query.minutes as string) || 60;
    const data = prices[symbol] || [];
    const limitedData = data.slice(-minutes);
    const latest = limitedData[limitedData.length - 1] || 0;
    const average = limitedData.reduce((acc, val) => acc + val, 0) / limitedData.length || 0;
    res.json({ latest, average, history: limitedData, count: limitedData.length });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
