import App from "@/App";
import Data from "@/pages/Data";
import { ErrorPage } from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Transaction from "@/pages/Transaction";

import {
    createBrowserRouter,
   
  } from "react-router-dom";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/Home",
          element: <Home/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/Data",
          element: <Data/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/Transaction",
          element: <Transaction/>,
          errorElement: <ErrorPage />,
        },
      ],
    },
    
    
      
    
  ]);