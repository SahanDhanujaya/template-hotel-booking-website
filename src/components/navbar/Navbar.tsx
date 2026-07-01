import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Local state to manage mobile menu toggle drawer open/close
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Reusable array of our navigation links targeting section hashes
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Food", href: "#food" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const languages = [
    { name: "English", lable: "English" },
    { name: "Sinhala", lable: "සිංහල" },
    { name: "Tamil", lable: "தமிழ்" },
  ];

  return (
    <>
      {/* --- DESKTOP & MOBILE WRAPPER HEADER --- */}
      <nav className="p-4 flex items-center justify-between shadow-[0_4px_30px_rgba(44,37,32,0.03)] bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-[999] font-serif">
        <div className="flex items-center gap-4">
          {/* Logo Branding Block for Desktop */}
          <div className="bg-[#b3925a] rounded-sm w-10 h-10 flex items-center justify-center shadow-md hover:cursor-pointer transition-transform hover:rotate-6 md:flex hidden">
            <span className="text-xl font-serif font-semibold text-white">F</span>
          </div>

          {/* Trigger Button: Opens Mobile Nav Drawer */}
          <button
            onClick={toggleMenu}
            className="bg-[#b3925a] rounded-sm flex items-center justify-center shadow-md hover:cursor-pointer transition-transform hover:rotate-6 md:hidden w-10 h-10 active:scale-95"
            aria-label="Toggle Menu"
          >
            <MenuIcon className="w-5 h-5 text-white" />
          </button>

          {/* Text Titles */}
          <div className="text-left hidden md:block">
            <h1 className="text-sm md:text-md text-[#2c2520] font-bold tracking-widest font-serif">
              HOTEL FOOD COURT
            </h1>
            <span className="text-gray-400 text-[11px] block mt-0.5 font-sans tracking-wide font-light lowercase">
              explore the best food in town
            </span>
          </div>
        </div>

        {/* --- DESKTOP NAVIGATION LINKS LINK RENDER (Hidden on Mobile) --- */}
        <ul className="flex items-center gap-8 md:flex hidden font-sans">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-[#b3925a] transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Action Menu Buttons */}
        <div className="flex items-center gap-4 font-sans">
          <Link 
            to="/auth/login" 
            className="text-gray-600 text-xs font-semibold tracking-widest hover:text-[#b3925a] transition-colors uppercase"
          >
            Manage Bookings
          </Link>
          
          <span className="h-4 border-l border-gray-200"></span>

          {/* Modern Luxury Language Selector */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 px-1 py-2 text-xs font-semibold uppercase tracking-widest text-gray-600 hover:text-[#b3925a] transition-colors cursor-pointer"
              aria-label="Select Language"
            >
              <span>{selectedLanguage}</span>
              <svg
                className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu - Triggers smoothly on hover/focus */}
            <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-100 rounded-sm shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-right z-[1002]">
              <div className="p-1 flex flex-col gap-0.5">
                {languages.map((language, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-gray-600 hover:text-[#b3925a] hover:bg-[#f7f6f0] rounded-sm transition-colors cursor-pointer"
                    onClick={() => setSelectedLanguage(language.lable)}
                  >
                    {language.lable}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY DRAWER MENUS (Responsive Side Drawer) --- */}
      {/* Muted Backdrop Mask Layer */}
      <div
        className={`fixed inset-0 bg-[#2c2520]/40 z-[1000] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Side Slide-out Drawer Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[1001] p-6 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Panel Header Row */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-[#b3925a] rounded-sm w-8 h-8 flex items-center justify-center shadow">
              <span className="text-md font-serif font-semibold text-white">F</span>
            </div>
            <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#2c2520]">
              MENU
            </span>
          </div>

          {/* Close Menu Button */}
          <button
            onClick={closeMenu}
            className="p-1.5 rounded-sm bg-gray-50 text-gray-400 hover:bg-gray-100 active:scale-95 transition-all"
            aria-label="Close Menu"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Vertical Menu Links */}
        <ul className="flex flex-col gap-1 mt-8 font-sans text-left">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-[#b3925a] hover:bg-[#f7f6f0] px-4 py-3.5 rounded-sm transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer Footer Details */}
        <div className="mt-auto pt-6 border-t border-gray-100 text-left font-sans">
          <p className="text-[11px] text-gray-400 font-light tracking-wide">
            © 2026 Hotel Food Court. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;