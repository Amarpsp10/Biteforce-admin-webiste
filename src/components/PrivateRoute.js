import { Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route 
      {...rest}
      render={({ location }) => 
        user ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;