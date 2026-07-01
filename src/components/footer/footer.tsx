import { Mail, MapPinIcon, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 text-zinc-900 pt-14 pb-6 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-xl w-8 h-8 flex items-center justify-center text-sm font-semibold">
              F
            </div>
            <span className="text-[14px] font-semibold tracking-tight text-zinc-900">
              Hotel Food Court
            </span>
          </div>
          <p className="text-[12.5px] text-zinc-400 mt-2 leading-relaxed">
            Explore the best food in town and experience effortless comfort, wherever you stay.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-[12px]">Quick links</h4>
          <ul className="space-y-2.5 text-[12.5px] font-medium">
            <li><a href="#home" className="text-zinc-400 hover:text-teal-700 transition-colors">Home</a></li>
            <li><a href="#about" className="text-zinc-400 hover:text-teal-700 transition-colors">About us</a></li>
            <li><a href="#rooms" className="text-zinc-400 hover:text-teal-700 transition-colors">Rooms</a></li>
            <li><a href="#food" className="text-zinc-400 hover:text-teal-700 transition-colors">Food court</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-[12px]">Our services</h4>
          <ul className="space-y-2.5 text-[12.5px] font-medium">
            <li><a href="#booking" className="text-zinc-400 hover:text-teal-700 transition-colors">Room booking</a></li>
            <li><a href="#dining" className="text-zinc-400 hover:text-teal-700 transition-colors">Online ordering</a></li>
            <li><a href="#events" className="text-zinc-400 hover:text-teal-700 transition-colors">Catering &amp; events</a></li>
            <li><a href="#support" className="text-zinc-400 hover:text-teal-700 transition-colors">24/7 concierge</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-[12px]">Contact</h4>
          <ul className="space-y-2.5 text-[12.5px] text-zinc-400 text-left">
            <li className='flex items-center gap-2.5'>
              <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-3.5 h-3.5" />
              </span>
              123 Luxury Stay Ave, Vacation City
            </li>
            <li className='flex items-center gap-2.5'>
              <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </span>
              +1 (555) 019-2834
            </li>
            <li className='flex items-center gap-2.5'>
              <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </span>
              support@hotelfoodcourt.com
            </li>
          </ul>
        </div>

      </div>

      {/* Divider and Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11.5px] text-zinc-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Hotel Food Court. All rights reserved.
        </p>
        <div className="flex gap-5 text-[11.5px] text-zinc-400 font-medium">
          <a href="#privacy" className="hover:text-teal-700 transition-colors">Privacy policy</a>
          <a href="#terms" className="hover:text-teal-700 transition-colors">Terms of service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;