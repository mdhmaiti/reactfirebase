import { Outlet } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="relative flex justify-between items-center" />
        <div className="absolute inset-0  -z-50 h-32 flex bg-gradient-to-r from-rose-500  blur-3xl   justify-center items-center" />

        <Navbar />

        <Outlet />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
