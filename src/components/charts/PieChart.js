import React, { useContext } from 'react';
import {Doughnut} from 'react-chartjs-2';
import GlobalDataContext from '../../apiCalls/GlobalDataContext';
import './PieChart.css'


export const PieChart = () => {
    const context = useContext(GlobalDataContext);
    const infected = parseInt(context.globalData.TotalConfirmed);
    const recovered = parseInt(context.globalData.TotalRecovered);
    const deaths = parseInt(context.globalData.TotalDeaths);
    const country = context.globalData.Country;
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
        <div className="pieChartContainer">
            <h3>Commulative Record</h3>
            <h3>{country}</h3>
            <Doughnut data={data}/>
        </div>
    )
}
