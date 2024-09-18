import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/Home";
//import WorkPage from "../pages/works/work";
import ErrorPage from "../pages/error/Error";

function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {path: "*", element: <ErrorPage />},
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
