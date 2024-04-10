import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/Home";


function Router(){
  const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
  ])

    return(
      <RouterProvider router={router}/>
    )}

export default Router