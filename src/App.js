import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
