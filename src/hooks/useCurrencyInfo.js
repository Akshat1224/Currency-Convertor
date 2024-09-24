import { useState, useEffect } from 'react';

function useCurrencyInfo(baseCurrency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        async function fetchCurrencyInfo() {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
            const data = await response.json();
            setCurrencyInfo(data.rates);
        }

        fetchCurrencyInfo();
    }, [baseCurrency]);

    return currencyInfo;
}

export default useCurrencyInfo;
