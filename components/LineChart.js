import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  
function LineChart({periods, periodsDate}) {
    Chart.register(
        ArcElement,
        LineElement,
        BarElement,
        PointElement,
        BarController,
        BubbleController,
        DoughnutController,
        LineController,
        PieController,
        PolarAreaController,    
        RadarController,
        ScatterController,
        CategoryScale,
        LinearScale,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale,
        TimeSeriesScale,
        Decimation,
        Filler,
        Legend,
        Title,
        Tooltip
      );
      
      const options = {
          interaction: {
            intersect: false,
            mode: 'index',
          },
          plugins:{
            legend: {
                display : false
              }
          }
      };

    const dataMostrar = (objetValue) => {
            let data = [];
            for (let i = 0 ; i < periods.length ; i++) {
                if (periods[i].all) {
                    data.unshift(periods[i].all[objetValue])
                }else{
                    data.unshift(0)
                }
                
            }
            return(data)
    }

const data= {
    labels: periodsDate,
        datasets: [{
            label: 'Kills', 
            data:  dataMostrar('kills'),
            backgroundColor: [
                'rgba(5, 220, 155, 0.2)',
            ],
            borderColor: [
                'rgba(5, 220, 155, 1)',
            ],
            borderWidth: 3,
            tension:0.4
        },
        {
            label: 'Deaths',
            data: dataMostrar('deaths'),
            backgroundColor: [
                'rgba(255, 51, 51, 0.2)',
            ],
            borderColor: [
                'rgba(255, 51, 51, 1)',
                
                
            ],
            borderWidth: 3,
            tension:0.4
        }, {
            label: 'KD',
            data: dataMostrar('kdRatio'),
            backgroundColor: [
                'rgba(5, 220, 155, 0)',
                
            ],
            borderColor: [
                'rgba(5, 220, 155, 0)',
                
            ],
            borderWidth: 3,
            tension:0.4
        }
    ]
}
const plugins =  {
    
  }
      
  return (
    <div>
       <Line
       data={data}
       options={options}
       height={300}
       width={600}
       plugins={plugins}
       />
    </div>
  )
}

export default LineChart