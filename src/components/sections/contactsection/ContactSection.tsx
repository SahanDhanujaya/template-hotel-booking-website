import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission payload:', formData);
    // Add logic here to connect with your backend framework routing endpoint
  };

  return (
    <section className="w-full bg-[#FDFBF9] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text Copy Headers */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Small Overline Subheader Tag */}
            <span className="text-[11px] font-bold tracking-[0.25em] text-blue-300 uppercase block mb-4">
              Contact Us
            </span>
            
            {/* Primary Catchphrase Title Header */}
            <h2 className="text-4xl md:text-5xl font-serif text-[#1F2432] leading-[1.15] mb-6 tracking-wide">
              If You Wish To Learn More Ask Before Booking.
            </h2>
            
            {/* Context Narrative Body Paragraph */}
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md">
              Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus 
              nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum 
              ornare sagittis dolor sagittis amet odio est.
            </p>
          </div>

          {/* RIGHT COLUMN: Interactive Form Content Box */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
            {/* Decorative Dot Matrix Background Accent Pattern Graphic */}
            <div className="absolute -left-10 -bottom-12 pointer-events-none text-gray-200/80 hidden sm:block z-0">
              <svg width="180" height="180" fill="currentColor" viewBox="0 0 100 100">
                <pattern id="dot-matrix" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="2" />
                </pattern>
                <rect width="100" height="100" fill="url(#dot-matrix)" />
              </svg>
            </div>

            {/* Form Container Floating Card Asset */}
            <div className="bg-white w-full max-w-xl shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-50 rounded-sm p-8 sm:p-12 relative z-10">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-7 text-left">
                
                {/* Your Name Entry Node */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent text-sm font-light text-gray-700 placeholder-gray-400 pb-3 border-b border-gray-200 outline-none transition-colors focus:border-sky-400"
                  />
                </div>

                {/* Your Email Entry Node */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent text-sm font-light text-gray-700 placeholder-gray-400 pb-3 border-b border-gray-200 outline-none transition-colors focus:border-sky-400"
                  />
                </div>

                {/* Subject Header Entry Node */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-transparent text-sm font-light text-gray-700 placeholder-gray-400 pb-3 border-b border-gray-200 outline-none transition-colors focus:border-sky-400"
                  />
                </div>

                {/* Message Custom Content Node Textarea */}
                <div className="flex flex-col">
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    required
                    className="w-full bg-transparent text-sm font-light text-gray-700 placeholder-gray-400 pb-2 border-b border-gray-200 outline-none resize-none transition-colors focus:border-sky-400"
                  />
                </div>

                {/* Terms and Agreements Checkbox Block */}
                <div className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 rounded border-gray-300 text-sky-500 focus:ring-sky-400 accent-sky-500 cursor-pointer"
                  />
                  <label htmlFor="agreeToTerms" className="text-xs text-gray-400 font-light select-none cursor-pointer">
                    I agree to the terms & conditions
                  </label>
                </div>

                {/* Action Interactive Execution Trigger Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-blue-400 text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 hover:bg-sky-500 shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Submit Now
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;