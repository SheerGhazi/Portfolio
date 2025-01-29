import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMain from "./SidebarMain";
import SidebarLinks from "./SidebarLinks";
import Button from "../Button/Button";
import { Mail } from "lucide-react";


const Sidebar = () => {
  return <div className="h-fit border border-[#565656]  m-4 p-6 rounded-3xl  md:h-fit">
    <SidebarHeader/>
    <SidebarMain/>
    <SidebarLinks/>
    <Button title={"Hire Me"} Icon={Mail}/>
    
  </div>;
};

export default Sidebar;
