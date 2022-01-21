import React from 'react'
import './scheduleitems.styles.css'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FolderIcon from '@mui/icons-material/Folder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ScheduleItems = () => {

    return (
        <>
            <div className="item-container">
                <div className="icon-container">
                <ColorLensIcon className='item-icon' />
                </div>
                <div className="para-container">
                <p className='text-para'>Illustration Templates</p>
                <p className='time-para'>9:00 AM - 4:00 PM</p>
                </div>
            </div>

            <div className="item-container query">
                <div className="icon-container">
                <CloudDownloadIcon className='item-icon' />
                </div>
                <div className="para-container">
                <p className='text-para'>UI Design</p>
                <p className='time-para'>4:00 PM - 5:00 PM</p>
                </div>
            </div>

            <div className="item-container query-2">
                <div className="icon-container">
                <FolderIcon className='item-icon' />
                </div>
                <div className="para-container">
                <p className='text-para'>UX Design</p>
                <p className='time-para'>5:00 PM - 6:00 PM</p>
                </div>
            </div>
        </>
    )
}

export default ScheduleItems
