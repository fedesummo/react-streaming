import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components";
import * as Pages from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Pages.Home />
      }
    ],
  },
  {
    path: "*",
    element: <Pages.NotFound />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
