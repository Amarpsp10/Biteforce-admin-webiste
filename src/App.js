import React from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import {LandingPage, LoginPage, SignUpPage, SignUpInfoPage,ForgetPaswordPage,Home} from './pages'
const App = () => {
  return (
    <>
      <Route path='/home' component={Home}/>
      <Route path='/welcome' component={LandingPage} exact/>
      <Route path='/login' component={LoginPage} exact/>
      <Route path='/signup' component={SignUpPage} exact/>
      <Route path='/signup/complete-profile' component={SignUpInfoPage} exact/>
      <Route path='/forget-password' render={()=><ForgetPaswordPage/>} exact/>
    </>
  );
}

export default App;
