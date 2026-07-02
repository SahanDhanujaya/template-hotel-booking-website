import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboardIcon,
  CalendarCheck2Icon,
  UsersIcon,
  LogOutIcon,
  ChevronsLeftIcon,
  MenuIcon,
  XIcon,
  ReceiptIcon,
  ActivityIcon,
  BedDoubleIcon,
  BarChart3Icon,
} from "lucide-react";
import { useAuth } from "../../context/AuthProvider";

const userNavItems = [
  { name: "Dashboard", to: "/user", icon: LayoutDashboardIcon },
  { name: "Reservations", to: "/user/reservations", icon: CalendarCheck2Icon },
  { name: "Vouchers", to: "/user/vouchers", icon: ReceiptIcon },
  { name: "Activities", to: "/user/activities", icon: ActivityIcon },
  { name: "Profile", to: "/user/profile", icon: UsersIcon },
];

const adminNavItems = [
  { name: "Manage Bookings", to: "/admin/manage", icon: CalendarCheck2Icon },
  { name: "Guests", to: "/admin/guests", icon: UsersIcon },
  { name: "Rooms", to: "/admin/rooms", icon: BedDoubleIcon },
  { name: "Reports", to: "/admin/reports", icon: BarChart3Icon },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role?.toLowerCase() === "admin";
  const navItems = isAdmin ? adminNavItems : userNavItems;

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const initials =
    (user as unknown as { name?: string })?.name
      ?.split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() ||
    user?.email?.slice(0, 2).toUpperCase() ||
    "AD";

  const SidebarContent = (
    <div className="flex flex-col h-full font-sans bg-white text-zinc-900">
      {/* --- BRAND / COLLAPSE HEADER --- */}
      <div
        className={`flex items-center gap-3 px-4 py-5 border-b border-zinc-100 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <div className={`flex items-center gap-3 ${collapsed ? "hidden" : "flex"}`}>
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
            <span className="text-lg font-semibold text-white">F</span>
          </div>
          <div className="text-left leading-tight">
            <h1 className="text-[13px] text-zinc-900 font-semibold tracking-tight">
              Hotel Food Court
            </h1>
            <span className="text-zinc-400 text-[11px] block">
              {isAdmin ? "Admin console" : "User console"}
            </span>
          </div>
        </div>

        {collapsed && (
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
            <span className="text-lg font-semibold text-white">F</span>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`hidden md:flex p-1.5 rounded-lg bg-zinc-100 text-zinc-400 hover:bg-teal-50 hover:text-teal-700 active:scale-95 transition-all ${
            collapsed
              ? "absolute -right-3 top-6 bg-white shadow-sm border border-zinc-200"
              : ""
          }`}
          aria-label="Toggle sidebar width"
        >
          <ChevronsLeftIcon
            className={`w-4 h-4 transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>

        <button
          onClick={() => onToggle(false)}
          className="md:hidden p-1.5 rounded-lg bg-zinc-100 text-zinc-400 hover:bg-zinc-200 active:scale-95 transition-all"
          aria-label="Close Menu"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>

      {/* --- NAVIGATION LINKS --- */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  end={item.to === "/user" || item.to === "/admin/manage"}
                  onClick={() => onToggle(false)}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                      collapsed ? "justify-center" : ""
                    } ${
                      isActive
                        ? "bg-teal-50 text-teal-700"
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                    }`
                  }
                  title={collapsed ? item.name : undefined}
                >
                  <Icon className="w-[17px] h-[17px] shrink-0" />
                  <span className={collapsed ? "hidden" : "block"}>
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* --- USER / LOGOUT FOOTER --- */}
      <div className="border-t border-zinc-100 p-3">
        <div
          className={`flex items-center gap-3 rounded-lg px-2 py-2 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-full w-9 h-9 flex items-center justify-center font-semibold text-[11px] shrink-0">
            {initials}
          </div>
          <div
            className={`text-left leading-tight overflow-hidden ${
              collapsed ? "hidden" : "block"
            }`}
          >
            <p className="text-[12.5px] font-medium text-zinc-900 truncate max-w-[130px]">
              {(user as unknown as { name?: string })?.name ||
                (isAdmin ? "Admin User" : "Guest User")}
            </p>
            <p className="text-[11px] text-zinc-400 truncate max-w-[130px]">
              {user?.email || (isAdmin ? "admin@hotel.com" : "guest@hotel.com")}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg text-[13px] font-medium text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-all ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <LogOutIcon className="w-[17px] h-[17px] shrink-0" />
          <span className={collapsed ? "hidden" : "block"}>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden h-16 w-full fixed z-[999] top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-zinc-100 flex items-center px-4">
        <button
          onClick={() => onToggle(true)}
          className="rounded-lg w-10 h-10 flex items-center justify-center active:scale-95 transition-transform text-zinc-900 hover:text-teal-700"
          aria-label="Open Menu"
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      <aside
        className={`hidden md:flex flex-col relative shrink-0 bg-white border-r border-zinc-100 h-screen sticky top-0 z-[900] transition-all duration-300 ${
          collapsed ? "w-[76px]" : "w-64"
        }`}
      >
        {SidebarContent}
      </aside>

      <div
        className={`fixed inset-0 bg-zinc-900/30 z-[1000] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => onToggle(false)}
      />

      <aside
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[1001] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {SidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;