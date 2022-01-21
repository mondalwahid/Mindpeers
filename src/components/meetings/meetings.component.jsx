import React from 'react'
import './meetings.styles.css'
import Meetingdates from '../meetingdates/meetingdates.component'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Meetings = () => {
    return (
        <>
            <div className="meetings-container">
                <div className="search-profile">
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 480, height: 20,}}
            >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            </Paper>
            <img src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" className='meeting-img' alt="" />
            </div>
            <h3>Meeting</h3>
            <Meetingdates/>
            </div>
            </>
    )
}

export default Meetings
