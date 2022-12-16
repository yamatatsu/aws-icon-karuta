import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Template from "./Template";
import Root from "./pages/Root";
import Karuta, { randomSort } from "./pages/Karuta";
import Catalog from "./pages/Catalog";
import ErrorPage from "./pages/ErrorPage";
import * as icons from "./icons";
import "./index.css";

const karutaNodes = (
  [
    ["karuta/service16", "Service icons (size 16)", icons.service16Icons],
    ["karuta/service32", "Service icons (size 32)", icons.service32Icons],
    ["karuta/service48", "Service icons (size 48)", icons.service48Icons],
    ["karuta/service64", "Service icons (size 64)", icons.service64Icons],
    ["karuta/category16", "Category icons (size 16)", icons.category16Icons],
    ["karuta/category32", "Category icons (size 32)", icons.category32Icons],
    ["karuta/category48", "Category icons (size 48)", icons.category48Icons],
    ["karuta/category64", "Category icons (size 64)", icons.category64Icons],
    ["karuta/resource", "Resource icons", icons.resourceIcons],
  ] as const
).map(([path, title, icons]) => ({
  path,
  element: (
    <Karuta title={title} initialIcons={icons} randomSort={randomSort} />
  ),
}));

const catalogNodes = (
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
  element: <Catalog title={title} icons={icons} />,
}));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Template>
          <Outlet />
        </Template>
      ),
      errorElement: (
        <Template>
          <ErrorPage />
        </Template>
      ),
      children: [
        { path: "/", element: <Root /> },
        ...karutaNodes,
        ...catalogNodes,
      ],
    },
  ],
  { basename: "/aws-karuta" }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
