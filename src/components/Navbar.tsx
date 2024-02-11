


import MobMenu from "./MobMenu";

import { Bitcoin, Home, Landmark } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";






const navItems = [
    { id: 1, title: "Home", url: "/Home" },
    { id: 2, title: "Transaction", url: "/Transaction" },
    { id: 3, title: "Data", url: "/Data" },
    
    
  ];

const Navbar = () => {
  return (
    <nav className=" p-5 w-full fixed top-0 left-0 z-40 ">
      <div className=" flex items-center justify-between w-full ">
        <div className=" flex flex-row items-center justify-start space-x-10 w-fit">
          <Link to="/" className="flex flex-row  items-center space-x-6">
          
            <span className={`  p-2 rounded-md text-md md:text-xl font-medium glow`}>React-Firebase</span>
          </Link>
          
        <ModeToggle />
      
          
          
        </div>
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <Link
              className=" text-lg font-medium  "
              to={item.url}
              key={item.id}
            >
              <div className="flex flex-row  justify-center items-center space-x-5">
              
              {item.title === "Home" && <Home className='glow'/>}
                {item.title === "Transaction" && <Bitcoin  className='glow' />}
                {item.title === "Data" && <Landmark className='glow'/> }
                <Button
                  className="  text-xl font-medium shadow-lg shadow-rose-400/50 "
                  variant="ghost"
                >
                  {item.title}
                </Button>
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:hidden ">
          
          <MobMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;