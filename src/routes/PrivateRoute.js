import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { auth } = useSelector((state) => state.authentication);

  return (
    <Route
      exact
      path={props.path}
      render={() => (auth ? props.children : <Redirect to="/" />)}
    />
  );
};
