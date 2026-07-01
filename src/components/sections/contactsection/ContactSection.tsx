import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission payload:", formData);
    // Add logic here to connect with your backend framework routing endpoint
  };

  return (
    <section className="w-full bg-[#FDFBF9] pt-24 md:pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text Copy Headers */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Small Overline Subheader Tag */}
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#b3925a] uppercase block mb-4 font-sans">
              Contact Us
            </span>

            {/* Primary Catchphrase Title Header */}
            <h2 className="text-3xl md:text-4xl font-serif text-[#2c2520] uppercase tracking-wide leading-tight mb-6">
              If You Wish To Learn More Ask Before Booking.
            </h2>

            {/* Context Narrative Body Paragraph */}
            <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed max-w-md">
              Adipiscing integer ultrices suspendisse varius etiam est. Est,
              felis, tempus nec vitae orci sodales Metus, velit nec at diam in
              sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est.
            </p>
          </div>

          {/* RIGHT COLUMN: Interactive Form Content Box */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
            {/* Decorative Dot Matrix Background Accent Pattern Graphic */}
            <div className="absolute -left-10 -bottom-12 pointer-events-none text-gray-200/50 hidden sm:block z-0">
              <svg
                width="180"
                height="180"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <pattern
                  id="dot-matrix"
                  x="0"
                  y="0"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="3" cy="3" r="1.5" />
                </pattern>
                <rect width="100" height="100" fill="url(#dot-matrix)" />
              </svg>
            </div>

            {/* Form Container Floating Card Asset */}
            <div className="bg-white w-full max-w-xl shadow-[0_15px_50px_rgba(44,37,32,0.02)] border border-gray-100 rounded-sm p-8 sm:p-12 relative z-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-7 text-left"
              >
                {/* Your Name Entry Node */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent text-sm font-sans font-light text-gray-700 placeholder-gray-400 pb-3 border-b border-gray-200 outline-none transition-colors focus:border-[#b3925a]"
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
                    className="w-full bg-transparent text-sm font-sans font-light text-gray-700 placeholder-gray-400 pb-3 border-b border-gray-200 outline-none transition-colors focus:border-[#b3925a]"
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
                    className="w-full bg-transparent text-sm font-sans font-light text-gray-700 placeholder-gray-400 pb-3 border-b border-gray-200 outline-none transition-colors focus:border-[#b3925a]"
                  />
                </div>

                {/* Message Custom Content Node Textarea */}
                <div className="flex flex-col">
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    required
                    className="w-full bg-transparent text-sm font-sans font-light text-gray-700 placeholder-gray-400 pb-2 border-b border-gray-200 outline-none resize-none transition-colors focus:border-[#b3925a]"
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
                    className="w-4 h-4 rounded-sm border-gray-300 text-[#b3925a] focus:ring-[#b3925a]/20 accent-[#b3925a] cursor-pointer"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-xs text-gray-400 font-sans font-light select-none cursor-pointer"
                  >
                    I agree to the terms & conditions
                  </label>
                </div>

                {/* Action Interactive Execution Trigger Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#b3925a] text-white text-xs font-semibold font-sans uppercase tracking-widest rounded-sm transition-all duration-300 hover:bg-[#2c2520] hover:cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded Map Container Block */}
      <div className="w-full">
        <iframe
          className="w-full h-100 pt-16 filter contrast-125 opacity-90 transition-all duration-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5087618395473!2d80.49893947333189!3d6.949153918074029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae39efe7c3c61ed%3A0xbc02c45fd24b0709!2sAberdeen%20Waterfall!5e0!3m2!1sen!2str!4v1782230835268!5m2!1sen!2str"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;