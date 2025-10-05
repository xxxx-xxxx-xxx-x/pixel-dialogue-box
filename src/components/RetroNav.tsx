import { useState } from "react";
import { Menu, X } from "lucide-react";

const RetroNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--retro-dialogue))]/95 border-b-4 border-[hsl(var(--retro-border))] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-['Press_Start_2P'] text-[10px] text-[hsl(var(--retro-text))]">
              BRS★PORTFOLIO
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 font-['Press_Start_2P'] text-[8px] text-[hsl(var(--retro-text))] 
                    bg-[hsl(var(--retro-bg))] border-2 border-[hsl(var(--retro-border))]
                    hover:bg-[hsl(var(--retro-border))] hover:text-black
                    transition-all duration-200 hover:translate-y-[-2px]
                    shadow-[2px_2px_0_hsl(var(--retro-shadow))]
                    hover:shadow-[4px_4px_0_hsl(var(--retro-shadow))]"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[hsl(var(--retro-text))]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-[hsl(var(--retro-border))] bg-[hsl(var(--retro-dialogue))]">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full px-4 py-3 font-['Press_Start_2P'] text-[8px] text-[hsl(var(--retro-text))] 
                    bg-[hsl(var(--retro-bg))] border-2 border-[hsl(var(--retro-border))]
                    hover:bg-[hsl(var(--retro-border))] hover:text-black
                    transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default RetroNav;
