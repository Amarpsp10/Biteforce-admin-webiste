import React from 'react'
import { ButtonContained, ButtonOutlined } from '../../components'
import theme from '../../theme'
import classes from './Dashboard.module.css'
import {useHistory} from 'react-router-dom'
export default function Dashboard() {
    const history = useHistory()
    return (
        <div className={classes.Dashboard}>
            <div className={classes.buttons}>
                <ButtonOutlined onClick={()=>history.push('/register-device')}>Register New Device +</ButtonOutlined>
                <ButtonOutlined onClick={()=>history.push('/register-institution')}>Register New Institute +</ButtonOutlined>
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
