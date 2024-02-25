import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { About } from "./Pages/About";
import { Navigation } from "./components/Navigation/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import { aboutPath, rootPath } from "./components/Navigation/routes.ts";

const router = createHashRouter([
  {
    path: `/${rootPath}`,
    element: <App />,
  },
  {
    path: `/${aboutPath}`,
    element: <About />,
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col w-full overflow-hidden">
      <Navigation />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>,
);
