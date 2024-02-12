import { useState, useEffect } from "react";
import { Outlet, useNavigate   } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from "./components/theme-provider";

import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  const [showWelcome, setShowWelcome] = useState(true);
 

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      navigate("/Home");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]
  )

  

  return (
    <div  className="template p-5">
      
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="relative flex justify-between items-center " />
        <div className="absolute inset-0  -z-50 h-32 flex bg-gradient-to-r from-rose-500  blur-3xl   justify-center items-center" />
       
        <Navbar />
        {showWelcome && (
          <div className="mt-10 ">
            <p  className="text-3xl text-rose-500 font-semibold" >Welcome!</p>
          </div>
        )}
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
