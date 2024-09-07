import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

function TableCoin({coins , isLoding}) {
  return (
    <div>
    {isLoding ? (<RotatingLines strokeColor='#3874ff' strokeWidth='2'  />) :
        (
        <table>
            <thead>
                <tr>
                    <th>نماد سکه</th>
                    <th>نام کامل</th>
                    <th>قیمت</th>
                    <th>تغیرات 24 ساعت</th>
                    <th>حجم کل مارکت</th>
                    <th>نمودار</th>
                </tr>
            </thead>
            <tbody>
                {coins.map(coin => (
                <TableRow coin={coin} key={coin.id} />
            ))}
            </tbody>
        </table>
  )}
  </div>
    
  )
}

export default TableCoin


const TableRow = ({
    coin :
     {name ,
     image ,
     symbol, 
     total_volume,
     current_price,
     price_change_percentage_24h: price_change,
    },
    }) => {
    return (
        <tr>
        <td>
            <div>
                <img src={image} alt={symbol} />
                <span> {symbol.toUpperCase()} </span>
            </div>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td>{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
            <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
        </td>
    </tr> 
    )

}