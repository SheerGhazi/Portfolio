import React from "react";
import { LucideIcon } from "lucide-react";

interface IProps {
  title: string;
  Icon?: LucideIcon;
}

const BtnSecondary = ({ title, Icon }: IProps) => {
  return (
    
      <div className="flex items-center  gap-2 px-4 py-1 w-fit bg-zinc-900 text-zinc-300   border border-[#565656] rounded-3xl transition-all ">
        {Icon && <Icon size={20} />} {/* Render icon only if provided */}
        <button className="cursor-text">{title}</button>
      </div>

  );
};

export default BtnSecondary;
