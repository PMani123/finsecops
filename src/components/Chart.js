import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { Link } from 'react-router-dom';

const RadarChart = () => {
    const [chartData] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    });

    // const [lightOptions] = useState({
    //     plugins: {
    //         legend: {
    //             labels: {
    //                 color: '#495057'
    //             }
    //         }
    //     },
    //     scales: {
    //         r: {
    //             pointLabels: {
    //                 color: '#495057',
    //             },
    //             grid: {
    //                 color: '#ebedef',
    //             },
    //             angleLines: {
    //                 color: '#ebedef'
    //             }
    //         }
    //     }
    // });

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className="card flex justify-content-center">
            <Link to="/" > <h2>HOME</h2> </Link>
            <h2 style={{color:"green",textDecoration:"underline",fontFamily:"cursive"}} >Radar Chart</h2>
            {/* <Chart type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} /> */}
            <Chart type="radar" data={chartData}  style={{ position: 'relative', width: '40%' }} />
        </div>
    );
}

export default RadarChart;