import React from 'react'
import {Route, useLocation, Redirect} from 'react-router-dom'
import { AuthProvider } from './contexts'
import {LandingPage, LoginPage, SignUpPage, SignUpInfoPage,ForgetPaswordPage, Message ,Home,DeviceRegister,InstitutionRegister} from './pages'
const App = () => {
  const currLink = useLocation().pathname
  return (
    <AuthProvider>
      {currLink==='/'? <Redirect to='/welcome'/> :null}
      <Route path='/home' component={Home}/>
      <Route path='/register-device' component={InstitutionRegister} exact/>
      <Route path='/register-institution' component={DeviceRegister} exact/>
      <Route path='/welcome' component={LandingPage} exact/>
      <Route path='/login' component={LoginPage} exact/>
      <Route path='/signup' component={SignUpPage} exact/>
      <Route path='/signup/complete-profile' component={SignUpInfoPage} exact/>
      <Route path='/forget-password' component={ForgetPaswordPage} exact/>
      <Route path='/message' component={Message} exact/>
    </AuthProvider>
  );
}

export default App;
