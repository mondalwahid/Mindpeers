import React from 'react'
import './recents.styles.css'
import ScheduleItems from '../scheduleitems/scheduleitems.component'

const Recents = ({Details}) => {
    return (
        <div className='recent-container'>
            <h1 className="main-header">
            Schedule
            </h1>
            <div className="toggle-container">
           <button className="toggle-buttons">
               Recent Added
            </button>
            <button className="toggle-buttons">
               In Progress
            </button>
            <button className="toggle-buttons">
               In Review
            </button>
            <button className="toggle-buttons">
               Completed
            </button> 
            </div>
            <ScheduleItems />
            
        </div>
    )
}

export default Recents
