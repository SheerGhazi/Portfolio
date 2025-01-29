"use client";

import { Github, Instagram, Twitter, Dribbble } from "lucide-react";
import Link from "next/link";

const SidebarLinks = () => {
  const socialLinks = [
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Dribbble size={20} />,
      href: "https://dribbble.com",
      label: "Dribbble",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub",
    },
  ];

  return (
    <div className="flex gap-4 content-center items-center justify-center">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 border border-transparent transition-all duration-300
                     hover:text-green-500 hover:border-green-500 hover:bg-zinc-800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
