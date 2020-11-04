import React, { useContext } from 'react';
import {Doughnut} from 'react-chartjs-2';
import GlobalDataContext from '../../apiCalls/GlobalDataContext';
import './PieChart.css'


export const PieChart = () => {
    const context = useContext(GlobalDataContext);
    const infected = parseInt(context.globalData.TotalConfirmed);
    const recovered = parseInt(context.globalData.TotalRecovered);
    const deaths = parseInt(context.globalData.TotalDeaths);
    const data = {
        labels: [
            'Infected',
            'Recovered',
            'Deaths'
        ],
        datasets: [{
            data: [infected, recovered, deaths],
            backgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'
            ],
            hoverBackgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'
            ]
        }]
    };
    return (
        <div className="pieChartContainer" style={{height:"auto", width:"auto"}}>
            <h3>Total</h3>
            <Doughnut data={data}/>
        </div>
    )
}
