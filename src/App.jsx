import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "host/theme";

import "./index.css";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "host/store";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Route>
          <Router>
            <Routes>
              <Route path="/" element={<Body />} />
            </Routes>
          </Router>
        </Route>
        <Body />
      </ThemeProvider>
    </Provider>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
