import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import styles from './TableCoin.module.css'

function TableCoin({coins , isLoding , currency}) {
  return (
    <div className={styles.container} >
    {isLoding ? (<RotatingLines strokeColor='#3874ff' strokeWidth='2'  />) :
        (
        <table className={styles.table} >
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
                <TableRow coin={coin} key={coin.id} currency={currency}/>
            ))}
            </tbody>
        </table>
  )}
  </div>
    
  )
}

export default TableCoin


const TableRow = ({
    currency,
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
            <div className={styles.symbol} >
                <img src={image} alt={symbol} />
                <span> {symbol.toUpperCase()} </span>
            </div>
        </td>
        <td>{name}</td>
        <td>
            {currency == "usd" && "$"}
            {currency == "eur" && "€"}
            {currency == "jpy" && "¥"}
            {current_price.toLocaleString()}</td>
        <td className={price_change > 0 ? styles.success : styles.error} >{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
            <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
        </td>
    </tr> 
    )

}