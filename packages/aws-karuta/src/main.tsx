import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import IconCatalog from "./IconCatalog";
import ErrorPage from "./error-page";
import * as icons from "./icons";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  ...(
    [
      ["catalog/service16", "Service icons (size 16)", icons.service16Icons],
      ["catalog/service32", "Service icons (size 32)", icons.service32Icons],
      ["catalog/service48", "Service icons (size 48)", icons.service48Icons],
      ["catalog/service64", "Service icons (size 64)", icons.service64Icons],
      ["catalog/category16", "Category icons (size 16)", icons.category16Icons],
      ["catalog/category32", "Category icons (size 32)", icons.category32Icons],
      ["catalog/category48", "Category icons (size 48)", icons.category48Icons],
      ["catalog/category64", "Category icons (size 64)", icons.category64Icons],
      ["catalog/resource", "Resource icons", icons.resourceIcons],
    ] as const
  ).map(([path, title, icons]) => ({
    path,
    element: <IconCatalog title={title} icons={icons} />,
  })),
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
