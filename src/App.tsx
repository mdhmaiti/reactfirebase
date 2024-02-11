import { Outlet } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar/>
        
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
