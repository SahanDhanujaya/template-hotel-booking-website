import { MenuIcon, UserIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="p-4 flex items-center justify-between shadow-lg bg-white/80 backdrop-blur-sm rounded-lg sticky top-0 z-999 font-serif">
            <div className="flex items-center justify-around gap-4">
                <div className="bg-blue-400 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg hover:cursor-pointer hover:transition-transform hover:rotate-12 md:block hidden">
                    <span className="text-2xl font-bold text-gray-200">F</span>
                </div>
                { /* Mobile Menu Icon */ }
                <div className="bg-blue-400 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer hover:transition-transform hover:rotate-12 md:hidden   lg:w-10 lg:h-10 md:w-8 md:h-8 w-8 h-8">
                    <MenuIcon className="w-5 h-5 text-gray-200" />
                </div>
                <div className="text-left md:block hidden">
                    <h1 className="text-2xl text-blue-300 md:text-xl">HOTEL FOOD COURT</h1>
                    <span className="text-gray-600 text-sm relative bottom-2">explore the best food in town</span>
                </div>
            </div>

            <ul className="flex items-center gap-4 md:flex hidden">
                <li className="text-sm text-gray-600 hover:text-blue-300 hover:cursor-pointer hover:transition-transform hover:bg-white/10"><Link to="/">Home</Link></li>
                <li className="text-sm text-gray-600 hover:text-blue-300 hover:cursor-pointer hover:transition-transform hover:bg-white/10"><Link to="/about">About</Link></li>
                <li className="text-sm text-gray-600 hover:text-blue-300 hover:cursor-pointer hover:transition-transform hover:bg-white/10"><Link to="/rooms">Rooms</Link></li>
                <li className="text-sm text-gray-600 hover:text-blue-300 hover:cursor-pointer hover:transition-transform hover:bg-white/10"><Link to="/food">Food</Link></li>
                <li className="text-sm text-gray-600 hover:text-blue-300 hover:cursor-pointer hover:transition-transform hover:bg-white/10"><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-blue-400 text-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:cursor-pointer hover:transition-transform hover:scale-105 md:text-sm text-xs">Sign In</button>
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:cursor-pointer hover:transition-transform hover:scale-110">
                    <UserIcon className="w-5 h-5" />
                </div>
            </div>
        </nav>
    )
}
export default Navbar