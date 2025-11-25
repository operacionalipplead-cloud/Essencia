
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, User, MessageSquare } from "lucide-react";

export const Navbar: React.FC = () => {
  const navItems = [
    {
      name: "Início",
      link: "#inicio",
      icon: <Home className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Sobre",
      link: "#sobre",
      icon: <User className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Contato",
      link: "#contato",
      icon: <MessageSquare className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};
