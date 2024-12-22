import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "head/Header";
// // import Solid from "solid/Solid";
// import Body from "body/Body";

import "./index.css";
import Footer from "./Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; //
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => (
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Header />
        <Body /> */}
        {/* <Solid /> */}
        <Footer />
      </ThemeProvider>
    </Provider>
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
