import React from 'react'
import { ButtonContained, ButtonOutlined } from '../../components'
import theme from '../../theme'
import classes from './Dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={classes.Dashboard}>
            <div className={classes.buttons}>
                <ButtonOutlined>Register New Device +</ButtonOutlined>
                <ButtonOutlined>Register New Institute +</ButtonOutlined>
            </div>
            <div style={theme.boxVariants.primary}>
                <div className={classes.boxHeader}>
                    <text style={theme.textVariants.body}>Recent Activity</text>
                </div>
                <hr/>
                <div className={classes.dashboardItems}>

                </div>
            </div>
        </div>
    )
}
