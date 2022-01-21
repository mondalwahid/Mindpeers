import React from 'react';
import './piechart.styles.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditIcon from '@mui/icons-material/Edit';

const Piechart = () => {
  return <>
  <div className="outer-container">
      <div className="topics">
          <h5>Illustration Template</h5>
          
          <div className="pie-icons">
          <CloudDownloadIcon />
          <EditIcon/>
          </div>
          </div>
  </div>
  </>;
};

export default Piechart;
