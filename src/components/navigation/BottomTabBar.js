import classes from './Navigation.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../../assets/icons/home-icon.svg'
import {ReactComponent as BellIcon} from '../../assets/icons/bell-icon.svg'
import {ReactComponent as UserIcon} from '../../assets/icons/user-icon.svg'
import { useLocation } from 'react-router-dom'
const BottomTabBar = () =>{
    const currLink = useLocation().pathname

    return(
        <div className={classes.bottomNavigator}>
            <Link to='/home/dashboard' className={`${classes.bottomTabBar} ${currLink==='/home/dashboard'? classes.activeTab :null}`}>
                <HomeIcon/>
                <text>Dashboard</text>
            </Link>
            <Link  to='/home/notification' className={`${classes.bottomTabBar} ${currLink==='/home/notification'? classes.activeTab :null}`}>
                <BellIcon/>
                <text>Notification</text>
            </Link>
            <Link  to='/home/profile' className={`${classes.bottomTabBar} ${currLink==='/home/profile'? classes.activeTab :null}`}>
                <UserIcon/>
                <text>Profile</text>
            </Link>
        </div>
    )
}

export default BottomTabBar