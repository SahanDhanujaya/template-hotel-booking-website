import { useState } from "react";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";
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
      <nav className="p-4 flex items-center justify-between border-b border-zinc-100 bg-white/90 backdrop-blur-md sticky top-0 z-[999] font-sans">
        <div className="flex items-center gap-4">
          {/* Logo Branding Block for Desktop */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl w-10 h-10 items-center justify-center hover:cursor-pointer transition-transform hover:-rotate-3 md:flex hidden">
            <span className="text-lg font-semibold text-white m-auto">F</span>
          </div>

          {/* Trigger Button: Opens Mobile Nav Drawer */}
          <button
            onClick={toggleMenu}
            className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center hover:cursor-pointer transition-transform hover:-rotate-3 md:hidden w-10 h-10 active:scale-95"
            aria-label="Toggle Menu"
          >
            <MenuIcon className="w-5 h-5 text-white" />
          </button>

          {/* Text Titles */}
          <div className="text-left hidden md:block">
            <h1 className="text-[13px] text-zinc-900 font-semibold tracking-tight">
              Hotel Food Court
            </h1>
            <span className="text-zinc-400 text-[11px] block">
              Explore the best food in town
            </span>
          </div>
        </div>

        {/* --- DESKTOP NAVIGATION LINKS LINK RENDER (Hidden on Mobile) --- */}
        <ul className="flex items-center gap-7 md:flex hidden">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-[13px] font-medium text-zinc-500 hover:text-teal-700 transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Action Menu Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/auth/login"
            className="text-zinc-600 text-[13px] font-medium hover:text-teal-700 transition-colors"
          >
            Manage bookings
          </Link>

          <span className="h-4 border-l border-zinc-200"></span>

          {/* Modern Language Selector */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 px-1 py-2 text-[13px] font-medium text-zinc-600 hover:text-teal-700 transition-colors cursor-pointer"
              aria-label="Select Language"
            >
              <span>{selectedLanguage}</span>
              <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu - Triggers smoothly on hover/focus */}
            <div className="absolute right-0 mt-1 w-32 bg-white border border-zinc-200 rounded-xl shadow-lg opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-right z-[1002]">
              <div className="p-1 flex flex-col gap-0.5">
                {languages.map((language, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 text-[12.5px] font-medium text-zinc-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer"
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
        className={`fixed inset-0 bg-zinc-900/40 z-[1000] transition-opacity duration-300 md:hidden ${
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
        <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-semibold text-white">F</span>
            </div>
            <span className="font-semibold text-[12.5px] text-zinc-900">
              Menu
            </span>
          </div>

          {/* Close Menu Button */}
          <button
            onClick={closeMenu}
            className="p-1.5 rounded-lg bg-zinc-100 text-zinc-400 hover:bg-zinc-200 active:scale-95 transition-all"
            aria-label="Close Menu"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Vertical Menu Links */}
        <ul className="flex flex-col gap-1 mt-6 text-left">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-[13.5px] font-medium text-zinc-600 hover:text-teal-700 hover:bg-teal-50 px-4 py-3 rounded-lg transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer Footer Details */}
        <div className="mt-auto pt-6 border-t border-zinc-100 text-left">
          <p className="text-[11px] text-zinc-400">
            © 2026 Hotel Food Court. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;