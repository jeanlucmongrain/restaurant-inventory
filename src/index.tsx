/** @format */
import "@fontsource/material-icons";
import "@fontsource/roboto";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";
import MaterialUITheme from "./theme";

render(
  <StrictMode>
    <ThemeProvider theme={MaterialUITheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root"),
);
