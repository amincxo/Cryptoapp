import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';


function HomePage() {
    const [coins , setCoins] = useState([]);
    const [perPage , setPerPage] = useState(20)
    const [page , setPage] = useState(1)

    
    useEffect( ()=> {
        const getData = async ()=>{
        const response = await fetch(getCoinList())
        const json = await response.json();
        setCoins(json);     
    }
    getData();
    },[]);
    


  return (
    <div>
        <TableCoin coins={coins} />

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