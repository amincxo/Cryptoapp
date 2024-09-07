import React from 'react'
import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

function TableCoin({coins}) {
  return (
    <div>
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
                {coins.map(coin => <tr>
                    <td>
                        <div>
                            <img src={coin.image} alt="" />
                            <span> {coin.symbol.toUpperCase()} </span>
                        </div>
                    </td>
                    <td>{coin.name}</td>
                    <td>${coin.current_price.toLocaleString()}</td>
                    <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>{coin.total_volume.toLocaleString()}</td>
                    <td><img src={coin.price_change_percentage_24h > 0 ? chartUp: chartDown} alt={coin.name} /></td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}

export default TableCoin