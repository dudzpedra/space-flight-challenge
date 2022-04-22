import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
