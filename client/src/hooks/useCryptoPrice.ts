import { useState, useEffect } from 'react';
import axios from 'axios';

const useCryptoPrice = (symbol: string, minutes: number = 60) => {
    const [data, setData] = useState({ latest: 0, average: 0, history: [], count: 0 });

    const fetchData = async () => {
        try {
            const response = await axios.get(`/price/${symbol}?minutes=${minutes}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, [symbol, minutes]);

    return data;
};

export default useCryptoPrice;
