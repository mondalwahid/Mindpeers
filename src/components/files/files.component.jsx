import React from 'react'
import './files.styles.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fileitems from '../../components/fileitems/fileitems.component'

const Files = () => {
    return (
        <>
                <div className="file-container">
                <div className="file-para">    
                <h3 className='header'>Files</h3>
                <p className='para'>View all <span></span><ArrowForwardIcon /> </p>
                </div>
                <Fileitems />
            </div>
        </>
    )
}

export default Files
