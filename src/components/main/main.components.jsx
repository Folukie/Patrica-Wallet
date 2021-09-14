import React from 'react'
import Activity from '../activity/activity.components'
import CardContent from '../card-content/card-content.component'
import './main.styles.scss'

const Main = () => {
    return (
        <div className="main">
            <CardContent/>
            <Activity/>
        </div>
    )
}

export default Main
