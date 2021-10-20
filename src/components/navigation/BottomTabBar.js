import classes from './Navigation.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../../assets/icons/home-icon.svg'
import {ReactComponent as BellIcon} from '../../assets/icons/bell-icon.svg'
import {ReactComponent as UserIcon} from '../../assets/icons/user-icon.svg'

const BottomTabBar = () =>{
    return(
        <div className={classes.bottomNavigator}>
            <Link to='/home/dashboard' className={classes.bottomTabBar}>
                <HomeIcon/>
                <text>Dashboard</text>
            </Link>
            <Link  to='/home/notification' className={classes.bottomTabBar}>
                <BellIcon/>
                <text>Notification</text>
            </Link>
            <Link  to='/home/profile' className={classes.bottomTabBar}>
                <UserIcon/>
                <text>Profile</text>
            </Link>
        </div>
    )
}

export default BottomTabBar