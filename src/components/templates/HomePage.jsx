import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';

import Pagination from '../modules/pagination';
import Search from '../modules/Search';


function HomePage() {
    const [coins , setCoins] = useState([]);
    const [isLoding , setIsLoding] = useState(true);
    const [page , setPage] = useState(1);
    const [currency , setCurrency] = useState("usd");

    
    useEffect( ()=> {
        setIsLoding(true)
        const getData = async ()=>{
        try {
            const response = await fetch(getCoinList(page , currency))
            const json = await response.json();
            setCoins(json);
            setIsLoding(false);
        } catch (error) {
            console.log(error)
        }
    }
    getData();
    },[page , currency]);
    


  return (
    <div>
        <Search  currency={currency} setCurrency={setCurrency} />
        <TableCoin coins={coins} isLoding={isLoding} currency={currency}  />
        <Pagination page={page} setPage={setPage} />

    </div>
  )
}

export default HomePage





























    // const options = {
    //     method: 'GET',
    //     headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-TJcWZyC8esmJ2byAVXXRM1dr'}
    //   };
      
    //   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));