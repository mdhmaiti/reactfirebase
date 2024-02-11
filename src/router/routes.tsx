import App from "@/App";
import Data from "@/pages/Data";
import Transaction from "@/pages/Transaction";
import {
    createBrowserRouter,
   
  } from "react-router-dom";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/Data",
        element: <Data/>,
      },
      {
        path: "/Transaction",
        element: <Transaction/>,
      },
      
    
  ]);