import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Karuta, { randomSort } from "./pages/Karuta";
import Catalog from "./pages/Catalog";
import WhatsThis from "./pages/WhatsThis";
import ErrorPage from "./pages/ErrorPage";
import * as icons from "./icons";
import "./index.css";

const karutaNodes = (
  [
    ["karuta/category16", "Category icons (size 16)", icons.category16Icons],
    ["karuta/category32", "Category icons (size 32)", icons.category32Icons],
    ["karuta/category48", "Category icons (size 48)", icons.category48Icons],
    ["karuta/category64", "Category icons (size 64)", icons.category64Icons],
    [
      "karuta/service16Level1",
      "Service icons Level 1 (size 16)",
      icons.service16Level1Icons,
    ],
    [
      "karuta/service32Level1",
      "Service icons Level 1 (size 32)",
      icons.service32Level1Icons,
    ],
    [
      "karuta/service48Level1",
      "Service icons Level 1 (size 48)",
      icons.service48Level1Icons,
    ],
    [
      "karuta/service64Level1",
      "Service icons Level 1 (size 64)",
      icons.service64Level1Icons,
    ],
    [
      "karuta/service16Level2",
      "Service icons Level 2 (size 16)",
      icons.service16Level2Icons,
    ],
    [
      "karuta/service32Level2",
      "Service icons Level 2 (size 32)",
      icons.service32Level2Icons,
    ],
    [
      "karuta/service48Level2",
      "Service icons Level 2 (size 48)",
      icons.service48Level2Icons,
    ],
    [
      "karuta/service64Level2",
      "Service icons Level 2 (size 64)",
      icons.service64Level2Icons,
    ],
    [
      "karuta/service16Level3",
      "Service icons Level 3 (size 16)",
      icons.service16Level3Icons,
    ],
    [
      "karuta/service32Level3",
      "Service icons Level 3 (size 32)",
      icons.service32Level3Icons,
    ],
    [
      "karuta/service48Level3",
      "Service icons Level 3 (size 48)",
      icons.service48Level3Icons,
    ],
    [
      "karuta/service64Level3",
      "Service icons Level 3 (size 64)",
      icons.service64Level3Icons,
    ],
    ["karuta/resource", "Resource icons", icons.resourceIcons],
    ["karuta/test", "Test icons", icons.testIcons],
  ] as const
).map(([path, title, icons]) => ({
  path,
  element: (
    <Karuta title={title} initialIconDict={icons} randomSort={randomSort} />
  ),
}));

const catalogNodes = (
  [
    ["catalog/category16", "Category icons (size 16)", icons.category16Icons],
    ["catalog/category32", "Category icons (size 32)", icons.category32Icons],
    ["catalog/category48", "Category icons (size 48)", icons.category48Icons],
    ["catalog/category64", "Category icons (size 64)", icons.category64Icons],
    [
      "catalog/service16",
      "Service icons (size 16)",
      icons.service16Level3Icons,
    ],
    [
      "catalog/service32",
      "Service icons (size 32)",
      icons.service32Level3Icons,
    ],
    [
      "catalog/service48",
      "Service icons (size 48)",
      icons.service48Level3Icons,
    ],
    [
      "catalog/service64",
      "Service icons (size 64)",
      icons.service64Level3Icons,
    ],
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
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/whats-this", element: <WhatsThis /> },
        ...karutaNodes,
        ...catalogNodes,
      ],
    },
  ],
  { basename: "/aws-icon-karuta" }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
