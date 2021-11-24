import React,{useContext} from 'react'
import {Route, Redirect, useLocation} from 'react-router-dom'
import {Dashboard, Notification, Profile} from '..'
import {HomeHeader, BottomTabBar} from '../../components'
import { AuthContext } from '../../contexts'

const Home = () => {
    const {user} = useContext(AuthContext)
    const currLink = useLocation().pathname
    return (
        <div>
            {user? null: <Redirect to='/welcome'/>}
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
