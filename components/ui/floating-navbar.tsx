
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { Brain } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = current - previous;

    // Always show at the top (less than 50px) or when scrolling up
    if (current < 50) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-sage-200 dark:border-white/[0.2] rounded-full bg-white/90 backdrop-blur-md dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2 items-center justify-center space-x-2",
        className
      )}
    >
      {/* Logo */}
      <a 
        href="#inicio" 
        onClick={(e) => handleScroll(e, '#inicio')}
        className="hidden sm:flex items-center gap-2 pl-4 pr-2"
      >
         <div className="flex items-center">
            <span className="font-serif font-bold text-3xl text-sage-600">E</span>
            <span className="font-serif font-bold text-sage-800 text-xl ml-0.5">ssência</span>
         </div>
      </a>

      {/* Divider */}
      <div className="h-4 w-px bg-sage-200 hidden sm:block"></div>

      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          onClick={(e) => handleScroll(e, navItem.link)}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-gray-600 dark:hover:text-neutral-300 hover:text-sage-700 font-medium transition-colors px-3 py-2 rounded-full hover:bg-sage-50"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </a>
      ))}
      <button 
        onClick={(e) => handleScroll(e, '#contato')}
        className="border text-sm font-medium relative border-sage-200 dark:border-white/[0.2] text-sage-900 dark:text-white px-5 py-2 rounded-full hover:bg-sage-50 transition-colors ml-2"
      >
        <span>Agendar</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-sage-500 to-transparent h-px" />
      </button>
    </motion.div>
  );
};
