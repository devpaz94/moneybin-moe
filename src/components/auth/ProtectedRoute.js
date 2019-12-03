import React from 'react';
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

//on component did mount -> get your jwt and check if ok. 

  return (
    <Route
        {...rest}
          render={props => {
            return <Component {...props} />
        }}
      />
  );
};

export default ProtectedRoute
