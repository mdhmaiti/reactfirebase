import { useState } from "react";
import {
 
    Bitcoin,

  Home,
  Landmark,
  Menu,
 
  Tally3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";




const navItems = [
  { id: 1, title: "Home", url: "/Home" },
  { id: 2, title: "Transaction", url: "/Transaction" },
  { id: 3, title: "Data", url: "/Data" },
  
  
];



const MobMenu = () => {
  const [isMobMenuOpen, setMobMenuOpen] = useState(false);

  return (
    <div>
      {!isMobMenuOpen ? (
        <Menu onClick={() => setMobMenuOpen(true)} />
      ) : (
        <Tally3 onClick={() => setMobMenuOpen(false)} />
      )}

      <div
        className={`fixed inset-y-0 left-0 py-10 bg-gray-900  backdrop-blur-md bg-opacity-75  flex flex-col gap-4 items-center w-3/5 z-50 transform transition-transform ease-in-out duration-500 ${
          isMobMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <Link
            className="py-1 text-slate-100 text-lg font-medium  "
            to={item.url}
            key={item.id}
            onClick={() => setMobMenuOpen(false)}
          >
            <div className="flex flex-col  items-center">
            {item.title === "Home" && <Home className='glow'/>}
                {item.title === "Transaction" && <Bitcoin  className='glow' />}
                {item.title === "Data" && <Landmark className='glow'/> }
              <Button
                className="text-slate-100 text-xl font-medium "
                variant="ghost"
              >
             {item.title}
              </Button>
            </div>
           
          </Link>
        ))}
    
      </div>
      
    </div>
  );
};

export default MobMenu;