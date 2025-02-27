import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import DataProvider from "./context/DataContext.tsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <HashRouter>
        <App/>
      </HashRouter>
    </DataProvider>
  </React.StrictMode>
);
