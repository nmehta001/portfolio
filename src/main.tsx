import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Project } from "./Pages/Projects";
import {
  aboutPath,
  projectsPath,
  rootPath,
} from "./components/Navigation/routes.ts";

const router = createBrowserRouter([
  {
    path: `/${rootPath}`,
    element: <App />,
    children: [
      {
        path: `/${rootPath}`,
        element: <Home />,
      },
      {
        path: `/${aboutPath}`,
        element: <About />,
      },
      {
        path: `/${projectsPath}/:id`,
        element: <Project />,
      },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
