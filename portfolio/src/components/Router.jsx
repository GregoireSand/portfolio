import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/Home";
//import WorkPage from "../pages/work/Work";

function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    // { path: "/work/:id", element: <WorkPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
