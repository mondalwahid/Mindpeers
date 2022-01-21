import React from 'react'
import './project-progress.styles.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Piechart from '../piechart/piechart.component'
import Chart from 'react-apexcharts';

const ProjectProgress = () => {
  let options = {
              chart: {
                type: 'donut',
              },
              colors:['#F44336', 'black'],
              labels: ["Illustrations", "Abstract Pattern"],
              fill: {
                colors: ['#F44336', 'black'],
},
              responsive: [{
                breakpoint: 680,
                options: {
                  chart: {
                    width: 300,
                    height:300
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
     let series = [65, 35]      
    return (
        <>
        <div className="main-container">
          <div className="project-header">
            <h3> Project Progress</h3>
            <div className="more-icon">   
            <MoreHorizIcon className='icon' />
            </div> 
          </div>
          <Piechart/>
            <Chart height={200} style={{maxWidth: '300px'}} options = {options} series={series} type='donut'/>
        </div>
        </>
    )
}

export default ProjectProgress
