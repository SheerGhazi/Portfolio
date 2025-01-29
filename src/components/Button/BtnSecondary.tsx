import React from "react";
import { LucideIcon } from "lucide-react";

interface IProps {
  title: string;
  Icon?: LucideIcon;
}

const BtnSecondary = ({ title, Icon }: IProps) => {
  return (
    <a href="/" className="inline-block">
      <div className="flex items-center gap-2 px-4 py-1 bg-zinc-900 text-zinc-300  border border-[#565656] rounded-3xl transition-all ">
        {Icon && <Icon size={20} />} {/* Render icon only if provided */}
        <button>{title}</button>
      </div>
    </a>
  );
};

export default BtnSecondary;
