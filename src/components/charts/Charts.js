import React from 'react'
import { LineChart } from './LineChart'
import  {PieChart}  from './PieChart'

export const Charts = () => {
    return (
        <div>
            <PieChart></PieChart>
            <br></br>
            <LineChart></LineChart>
        </div>
    )
}
