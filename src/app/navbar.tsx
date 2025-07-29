"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 h-full z-50 px-8 py-25 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex flex-row items-center gap-10 [writing-mode:vertical-rl] rotate-180">
        <div className="h-24 w-[1px] bg-black"></div>
          <a href="#contact" className="text-sm tracking-[0.2em] text-[--muted-foreground] transition-colors hover:text-[--foreground]">
            Contact
          </a>
          <a href="#projects" className="text-sm tracking-[0.2em] text-[--muted-foreground] transition-colors hover:text-[--foreground]">
            Projects
          </a>
          <a href="#about" className="text-sm tracking-[0.2em] text-[--muted-foreground] transition-colors hover:text-[--foreground]">
            About
          </a>
          <a href="#home" className="text-sm tracking-[0.2em] text-[--muted-foreground] transition-colors hover:text-[--foreground]">
            Home
          </a>
        </div>
        <div className="flex flex-row items-center gap-10 [writing-mode:vertical-rl] rotate-180">
          <p className="text-sm tracking-[0.2em] text-[--muted-foreground]">
            &copy;/2025
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;