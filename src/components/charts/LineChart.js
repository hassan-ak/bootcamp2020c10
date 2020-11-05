import React, { useContext } from 'react'
import GlobalDataContext from '../../apiCalls/GlobalDataContext'
import {Line} from 'react-chartjs-2';
import './PieChart.css'


export const LineChart = () => {


    const context = useContext(GlobalDataContext)
    const totalConfirmed = (context.totalData.confirmed).split(",").map(x=>+x);
    const totalRecovered = (context.totalData.recovered).split(",").map(x=>+x);
    const totalDeaths = (context.totalData.deaths).split(",").map(x=>+x);
    const totalDate = (context.totalData.Dated).split(",").map(x=>x.substr(0, 10));
    const country = context.globalData.Country;
    const totalConfirmedGlobal = (context.totalDataWorld.confirmed).split(",").map(x=>+x);
    const totalRecoveredGlobal = (context.totalDataWorld.recovered).split(",").map(x=>+x);
    const totalDeathsGlobal = (context.totalDataWorld.deaths).split(",").map(x=>+x);
    const totalDateGlobal = (context.totalDataWorld.Dated).split(",").map(x=>x);;


    const data = {
        labels: totalDate,
        datasets: [
          {
            label: 'Infected',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 0, 255, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 0, 255, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalConfirmed
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 255, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalRecovered
          },
          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalDeaths
          },
        ]
      };

      const data1 = {
        labels: totalDateGlobal,
        datasets: [
          {
            label: 'Infected',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 0, 255, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 0, 255, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalConfirmedGlobal
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 255, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalRecoveredGlobal
          },
          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalDeathsGlobal
          },
        ]
      };

      if (country==="Global") {
        return (
          <div className="pieChartContainer">
          <h3>Complete History</h3>
          <h3>{country}</h3>
          <Line data={data1} />
        </div>
      )
      } else {
        return (
          <div className="pieChartContainer">
          <h3>Complete History</h3>
          <h3>{country}</h3>
          <Line data={data} />
        </div>
      )
    }
}
