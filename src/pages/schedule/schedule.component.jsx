import React from 'react'
import Recents from '../../components/Recents/recents.component'
import Meetings from '../../components/meetings/meetings.component'
import './schedule.styles.css'
import Files from '../../components/files/files.component'
import ProjectProgress from '../../components/project-progress/project-progress.component'

const Schedule = () => {
    return (
        <>
        <div className='main-page'>
            <Recents />
            <Meetings />
            </div>
                <div className='second-row'>
                <ProjectProgress />
                <Files/>
        </div>
        </>
    )
}

export default Schedule
