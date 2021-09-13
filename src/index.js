import React from "react";
import reactDom from "react-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";
import serviceworkerDEV from "./serviceworkerDEV";

import App from "./App";

reactDom.render(
   <ThemeProvider>
      <App />
   </ThemeProvider>,
   document.getElementById("root")
);

serviceworkerDEV();
