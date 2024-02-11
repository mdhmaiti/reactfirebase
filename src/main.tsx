import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './router/root'
import {
  
  RouterProvider,
} from "react-router-dom";

// note : I am not including the <App/> directly in the main.tsx but I am defining in the router ; (do not get confused)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
