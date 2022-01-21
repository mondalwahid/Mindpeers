import React from 'react'
import './meetingdates.styles.css'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const Meetingdates = () => {
    return (
        <>
           <div className="dates-container">
            <div className="calendar">
            <div className="date">
            <p className='day-para'>Mon</p>
            <p className='date-para'>3</p>
            </div>
            <div className="time">
            <p className='first-para'>9:00 AM</p>
            <p className='other-paras'>2:00 PM</p>
            <p className='other-paras'> 4:00 PM</p>
            </div> 
            </div>

            <div className="calendar">
            <div className="date">
            <p className='day-para'>Tue</p>
            <p className='date-para'>4</p>
            </div>
            <div className="time">
            <p className='first-para'>10:30 AM</p>
            <p className='other-paras'>1:00 PM</p>
            <p className='other-paras'> <HorizontalRuleIcon className='dash-icon' /></p>
            </div> 
            </div>

            <div className="calendar">
            <div className="date">
            <p className='day-para'>Wed</p>
            <p className='date-para'>5</p>
            </div>
            <div className="time">
            <p className='first-para'>9:00 AM</p>
            <p className='other-paras'>3:00 PM</p>
            <p className='other-paras'> 6:00 PM</p>
            </div> 
            </div>

            <div className="calendar">
            <div className="date">
            <p className='day-para'>Thu</p>
            <p className='date-para'>6</p>
            </div>
            <div className="time">
            <p className='first-para'>11:00 AM</p>
            <p className='other-paras'> <HorizontalRuleIcon className='dash-icon' /> </p>
            <p className='other-paras'> 3:50 PM</p>
            </div> 
            </div>

            <div className="calendar">
            <div className="date">
            <p className='day-para'>Fri</p>
            <p className='date-para'>7</p>
            </div>
            <div className="time">
            <p className='first-para'>9:20 AM</p>
            <p className='other-paras'>1:15 PM</p>
            <p className='other-paras'> 5:45 PM</p>
            </div> 
            </div>

            </div> 
        </>
    )
}

export default Meetingdates
