import React from 'react'
import './sidebar.styles.css'
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <>
           <div className="sidebarMenu">
          <h3 className="sidebarTitle">Logo</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
                
                <PersonIcon className='icons' />
              Profile
            </li>
            <li className="sidebarListItem">
                <DateRangeIcon className='icons' />
              Schedule
            </li>
            <li className="sidebarListItem">
                <InsertChartIcon className='icons' />
              Overview
            </li>
            <li className="sidebarListItem">
                <ChatRoundedIcon className='icons' />
              Chat
            </li>
            <li className="sidebarListItem">
                <SettingsIcon className='icons' />
              Settings
            </li>
          </ul>
          <div className='logout'>
            <LogoutIcon className='icons' />
          <button className="logout-font">Logout</button>
          </div>
        </div> 
        </>
    )
}

export default Sidebar