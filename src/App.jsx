import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "host/theme";
import { Provider } from "react-redux";
import store from "host/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
