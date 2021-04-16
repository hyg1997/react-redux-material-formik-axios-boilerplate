import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { BaseLayout } from "../components";
import { LandingPage, SignUp, SignIn, Home } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => (
  <Switch>
    <PublicRoute exact path="/">
      <BaseLayout title="">
        <LandingPage />
      </BaseLayout>
    </PublicRoute>
    <PublicRoute exact path="/sign-up">
      <BaseLayout title="Registro">
        <SignUp />
      </BaseLayout>
    </PublicRoute>
    <PublicRoute exact path="/sign-in">
      <BaseLayout title="Inicio Sesion">
        <SignIn />
      </BaseLayout>
    </PublicRoute>
    <PrivateRoute exact path="/home">
      <BaseLayout title="Inicio">
        <Home />
      </BaseLayout>
    </PrivateRoute>
    <Redirect to="/" />
  </Switch>
);
