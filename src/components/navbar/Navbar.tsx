import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  // Local state to manage mobile menu toggle drawer open/close
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

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
      <nav className="p-4 flex items-center justify-between shadow-lg bg-white/80 backdrop-blur-sm rounded-lg sticky top-0 z-[999] font-serif">
        <div className="flex items-center gap-4">
          {/* Logo Branding Block for Desktop */}
          <div className="bg-blue-400 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg hover:cursor-pointer transition-transform hover:rotate-12 md:flex hidden">
            <span className="text-2xl font-bold text-gray-200">F</span>
          </div>

          {/* Trigger Button: Opens Mobile Nav Drawer */}
          <button
            onClick={toggleMenu}
            className="bg-blue-400 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer transition-transform hover:rotate-12 md:hidden w-10 h-10 active:scale-95"
            aria-label="Toggle Menu"
          >
            <MenuIcon className="w-5 h-5 text-white" />
          </button>

          {/* Text Titles */}
          <div className="text-left hidden md:block">
            <h1 className="text-md md:text-xl text-blue-300 font-bold leading-none tracking-wide">
              HOTEL FOOD COURT
            </h1>
            <span className="text-gray-600 text-xs sm:text-sm block mt-1 font-serif relative bottom-1">
              explore the best food in town
            </span>
          </div>
        </div>

        {/* --- DESKTOP NAVIGATION LINKS LINK RENDER (Hidden on Mobile) --- */}
        <ul className="flex items-center gap-6 md:flex hidden font-sans">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-sm font-medium font-serif text-gray-600 hover:text-blue-400 transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Action Menu Buttons */}
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 text-blue-500 text-xs sm:text-sm rounded-lg  transition-all active:scale-[0.98] font-serif hover:cursor-pointer uppercase">
            Manage Bookings
          </span>
          <span className="h-10 border border-gray-400"></span>
          {/* <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:cursor-pointer transition-transform hover:scale-110">
            <UserIcon className="w-5 h-5 text-gray-600" />
          </div> */}
          {/* Modern Language Selector */}
          <div className="relative group font-serif">
            <button
              className="w-20 flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-blue-500 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
              aria-label="Select Language"
            >
              <span>{selectedLanguage}</span>{" "}
              {/* You can bind this text to state later */}
              <svg
                className="w-4 h-4 text-blue-400 transition-transform duration-200 group-hover:rotate-180"
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
            <div className="absolute right-0 mt-1 w-32 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-right z-[1002]">
              <div className="p-1.5 flex flex-col gap-0.5">
                {languages.map((language, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50/60 rounded-lg transition-colors cursor-pointer"
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
        className={`fixed inset-0 bg-black/40 z-[1000] transition-opacity duration-300 md:hidden ${
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
            <div className="bg-blue-400 rounded-lg w-8 h-8 flex items-center justify-center shadow">
              <span className="text-lg font-bold text-gray-200">F</span>
            </div>
            <span className="font-serif font-bold text-sm text-blue-400">
              MENU
            </span>
          </div>

          {/* Close Menu Button */}
          <button
            onClick={closeMenu}
            className="p-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 active:scale-95 transition-all"
            aria-label="Close Menu"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Vertical Menu Links */}
        <ul className="flex flex-col gap-2 mt-8 font-sans text-left">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu} // Closes the mobile navigation panel smoothly once triggered
                className="block text-base font-medium text-gray-600 hover:text-blue-400 hover:bg-blue-50/50 px-4 py-3 rounded-xl transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer Footer Footer Details */}
        <div className="mt-auto pt-6 border-t border-gray-100 text-left font-sans">
          <p className="text-[11px] text-gray-400 font-light">
            © 2026 Hotel Food Court. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
