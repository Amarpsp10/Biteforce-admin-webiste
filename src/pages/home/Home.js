import React from 'react'
import {Route} from 'react-router-dom'
import {Dashboard, Notification, Profile} from '..'
import {HomeHeader, BottomTabBar} from '../../components'

const Home = () => {
    return (
        <div>
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
