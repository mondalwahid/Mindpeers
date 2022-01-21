import React from 'react'
import './fileitems.styles.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Fileitems = () => {
    return (
        <>
         <div className="files-container">
                <div className="filesicon-container">
                    <img src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png" className='filesicon' alt="" />
                </div>
                <div className="filepara-container">
                <div className="text-container">
                <p className='filetext-para'>User flow.fig</p>
                <p className='filetime-para'>Aug 5, 2021 at 9:50 AM</p>
                </div>
                <div className="files-icon">
                    <p className='text-size'>0,6KB</p>
                <CloudDownloadIcon className='filesicon-2' />
                </div>
                </div>          
                </div>

                <div className="files-container">
                <div className="filesicon-container">
                    <img src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png" className='filesicon' alt="" />
                </div>
                <div className="filepara-container">
                <div className="text-container">
                <p className='filetext-para'>Design system.fig</p>
                <p className='filetime-para'>Aug 5, 2021 at 9:20 AM</p>
                </div>
                <div className="files-icon">
                <p className='text-size'>0,8KB</p>
                <CloudDownloadIcon className='filesicon-2' />
                </div>
                </div>          
                </div>

                <div className="files-container">
                <div className="filesicon-container">
                <img src="https://cdn-icons-png.flaticon.com/512/136/136525.png" className='filesicon' alt="" />
                </div>
                <div className="filepara-container">
                <div className="text-container">
                <p className='filetext-para'>Animation.json</p>
                <p className='filetime-para'>Aug 5, 2021 at 9:05 AM</p>
                </div>
                <div className="files-icon">
                    <p className='text-size'>18KB</p>
                <CloudDownloadIcon className='filesicon-2' />
                </div>
                </div>          
                </div>
        </>
    )
}

export default Fileitems
