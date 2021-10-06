import React from 'react'
import {LandingPage, LoginPage, SignUpPage, SignUpInfoPage,ForgetPaswordPage} from './pages'
const App = () => {
  return (
    <div>
     <LandingPage/>
     <LoginPage/> 
     <SignUpPage/>
     <SignUpInfoPage/>
     <ForgetPaswordPage/>
    </div>
  );
}

export default App;
