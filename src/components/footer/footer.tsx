import { Mail, MapIcon, Phone } from 'lucide-react';

const Footer = () => {
  return (
    // Replaced bg-slate-50 with pure white or an elegant blend, using premium charcoal (#2c2520) for primary text
    <footer className="bg-white border-t border-gray-100 text-[#2c2520] pt-12 pb-6 text-left font-serif">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {/* Swapped sky-500 for the premium gold brand accent (#b3925a) */}
            <div className="bg-[#b3925a] text-white rounded-sm w-8 h-8 flex items-center justify-center text-md font-semibold shadow-sm">
              F
            </div>
            <span className="text-md uppercase tracking-wider font-semibold text-[#2c2520]">
              Hotel Food Court
            </span>
          </div>
          <p className="text-xs font-sans text-gray-400 mt-2 font-light leading-relaxed">
            Explore the best food in town and experience luxury like home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#2c2520] mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-xs font-sans font-medium">
            <li><a href="#home" className="text-gray-400 hover:text-[#b3925a] transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-[#b3925a] transition-colors">About Us</a></li>
            <li><a href="#rooms" className="text-gray-400 hover:text-[#b3925a] transition-colors">Rooms</a></li>
            <li><a href="#food" className="text-gray-400 hover:text-[#b3925a] transition-colors">Food Court</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-[#2c2520] mb-4 text-xs uppercase tracking-widest">Our Services</h4>
          <ul className="space-y-2 text-xs font-sans font-medium">
            <li><a href="#booking" className="text-gray-400 hover:text-[#b3925a] transition-colors">Room Booking</a></li>
            <li><a href="#dining" className="text-gray-400 hover:text-[#b3925a] transition-colors">Online Ordering</a></li>
            <li><a href="#events" className="text-gray-400 hover:text-[#b3925a] transition-colors">Catering & Events</a></li>
            <li><a href="#support" className="text-gray-400 hover:text-[#b3925a] transition-colors">24/7 Concierge</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-semibold text-[#2c2520] mb-4 text-xs uppercase tracking-widest">Contact</h4>
          <ul className="space-y-2.5 text-xs font-sans font-light text-gray-400 text-left">
            <li className='flex items-center gap-2'><MapIcon className="w-3.5 h-3.5 text-[#b3925a]" />123 Luxury Stay Ave, Vacation City</li>
            <li className='flex items-center gap-2'><Phone className="w-3.5 h-3.5 text-[#b3925a]" /> +1 (555) 019-2834</li>
            <li className='flex items-center gap-2'><Mail className="w-3.5 h-3.5 text-[#b3925a]" /> support@hotelfoodcourt.com</li>
          </ul>
        </div>

      </div>

      {/* Divider and Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
        <p className="text-[11px] text-gray-400 text-center sm:text-left font-light">
          &copy; {new Date().getFullYear()} Hotel Food Court. All rights reserved.
        </p>
        <div className="flex gap-4 text-[11px] text-gray-400 font-medium">
          <a href="#privacy" className="hover:text-[#b3925a] transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#b3925a] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;