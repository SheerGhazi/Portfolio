
import React from "react";
import { LucideIcon } from "lucide-react";

interface IProps {
  title: string;
  Icon?: LucideIcon; 
}

const Button = ({ title, Icon }: IProps) => {
  return (
    <div className="flex items-center justify-center pt-5">
    <a href="/" className=" ">
      <div className="flex items-center  gap-2 px-20 py-2 bg-green-500 text-zinc-800 text-2xl  border border-transparent rounded-3xl transition-all duration-300 
                      hover:text-green-500 hover:border-green-500 hover:bg-zinc-800 xl:text-xl xl:px-16">
        {Icon && <Icon size={20} />} 
        <button>{title}</button>
      </div>
    </a>
    </div>
  );
};

export default Button;
