import React from 'react'
import {Route} from 'react-router-dom'
import {Dashboard, Notification, Profile} from '..'
import {HomeHeader, BottomTabBar} from '../../components'
import { Redirect, useLocation } from 'react-router'
const Home = () => {
    const currLink = useLocation().pathname
    return (
        <div>
            {currLink==='/home'? <Redirect to='/home/dashboard'/>:null}
            <HomeHeader/>
            <>
              <Route path='/home/dashboard' component={Dashboard}/>
              <Route path='/home/notification' component={Notification}/>
              <Route path='/home/profile' component={Profile}/>
            </>
            <BottomTabBar/>
        </div>
    )
}

export default Home
