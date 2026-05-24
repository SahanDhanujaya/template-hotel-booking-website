import { Mail, MapIcon, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 text-slate-600 pt-12 pb-6 text-left font-serif">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-sky-500 text-white rounded-md w-8 h-8 flex items-center justify-center text-lg shadow-sm">
              F
            </div>
            <span className="text-lg uppercase tracking-wide text-blue-300">
              Hotel Food Court
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Explore the best food in town and experience luxury like home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="text-gray-500 hover:text-sky-500 transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-500 hover:text-sky-500 transition-colors">About Us</a></li>
            <li><a href="#rooms" className="text-gray-500 hover:text-sky-500 transition-colors">Rooms</a></li>
            <li><a href="#food" className="text-gray-500 hover:text-sky-500 transition-colors">Food Court</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#booking" className="text-gray-500 hover:text-sky-500 transition-colors">Room Booking</a></li>
            <li><a href="#dining" className="text-gray-500 hover:text-sky-500 transition-colors">Online Ordering</a></li>
            <li><a href="#events" className="text-gray-500 hover:text-sky-500 transition-colors">Catering & Events</a></li>
            <li><a href="#support" className="text-gray-500 hover:text-sky-500 transition-colors">24/7 Concierge</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-500 text-left">
            <li className='text-gray-500 flex items-center gap-2'><MapIcon className="w-4 h-4" />123 Luxury Stay Ave, Vacation City</li>
            <li className='text-gray-500 flex items-center gap-2'><Phone className="w-4 h-4" /> +1 (555) 019-2834</li>
            <li className='text-gray-500 flex items-center gap-2'><Mail className="w-4 h-4" /> support@hotelfoodcourt.com</li>
          </ul>
        </div>

      </div>

      {/* Divider and Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Hotel Food Court. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-slate-400">
          <a href="#privacy" className="hover:text-sky-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-sky-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;