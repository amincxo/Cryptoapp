import React, { useState } from 'react'
import styles from "./Chart.module.css"
import { convertData } from '../../helper/convertData';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Chart({chart , setChart}) {
    const [type , setType] = useState("prices")
    const typeHandler = (event) => {
        if (event.target.tagName === "BUTTON") {
            const type =  event.target.name;
            setType(type);
        }
    }
  return (
    <div className={styles.container} >
        <span className={styles.cross} onClick={()=> setChart(null)} >X</span>
        <div className={styles.chart} >
            <div className={styles.name} >
                <img src={chart.coin.image} />
                <p>{ chart.coin.name }</p>
            </div>
            <div className={styles.graph} >
                <ChartComponent data={convertData(chart,type)} type={type} />
            </div>
            <div className={styles.types} onClick={typeHandler}  >
                <button name='prices' className={type === "prices" ? styles.selected :null } > بر اساس قیمت </button>
                <button name="market_caps" className={type === "market_caps" ? styles.selected :null } > بر اساس حجم مارکت </button>
                <button name='total_volumes' className={type === "total_volumes" ? styles.selected :null } > بر اساس بیشترین مقدار </button>
            </div>
            <div className={styles.details} >
                <div>
                    <p> قیمت:</p>
                    <span>${chart.coin.current_price}</span>
                </div>
                <div>
                    <p >بیشترین قیمت: </p>
                    <span>${chart.coin.ath}</span>
                </div>
                <div>
                    <p>حجم مارکت:</p>
                    <span>${chart.coin.market_cap}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chart;


const ChartComponent  = ({data , type}) => {
    return (
                    <ResponsiveContainer width='100%' height="100%" >
                    <LineChart width={400} height={400} data={data} >
                        <Line type="monotone" dataKey={type}  stroke='#3874ff' strokeWidth="2px" />
                        <CartesianGrid stroke='#404040' />
                        <YAxis dataKey={type} domain={["auto" , "auto"]} />
                        <XAxis dataKey={Date}  hide  />
                        <Legend />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
        
    )
}