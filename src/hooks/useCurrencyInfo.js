import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //(`https://v6.exchangerate-api.com/v6/0f2c758a335f28392c9b0894/latest/${currency}.json`)
        
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;