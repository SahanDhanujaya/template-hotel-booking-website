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

  const inputClass =
    "w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10";

  return (
    <section className="w-full bg-[#F5F6F8] font-sans pt-24 md:pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Text Copy Headers */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-[12px] font-medium text-teal-700 block mb-4">
              Contact Us
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight mb-6">
              Have a question? Ask before you book.
            </h2>

            <p className="text-[13.5px] text-zinc-500 leading-relaxed max-w-md">
              Adipiscing integer ultrices suspendisse varius etiam est. Est,
              felis, tempus nec vitae orci sodales Metus, velit nec at diam in
              sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est.
            </p>
          </div>

          {/* RIGHT COLUMN: Interactive Form Content Box */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">

            {/* Soft ambient accent glow instead of a decorative dot pattern */}
            <div className="absolute -left-10 -bottom-12 w-64 h-64 bg-teal-200/25 rounded-full blur-[100px] hidden sm:block pointer-events-none z-0" />

            {/* Form Container Floating Card Asset */}
            <div className="bg-white w-full max-w-xl rounded-2xl border border-zinc-200 shadow-sm p-8 sm:p-10 relative z-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-5 text-left"
              >
                {/* Your Name Entry Node */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[12.5px] font-medium text-zinc-600">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Your Email Entry Node */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[12.5px] font-medium text-zinc-600">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Subject Header Entry Node */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[12.5px] font-medium text-zinc-600">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Message Custom Content Node Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[12.5px] font-medium text-zinc-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more..."
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Terms and Agreements Checkbox Block */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="w-3.5 h-3.5 rounded border-zinc-300 text-teal-700 focus:ring-teal-600 accent-teal-700 cursor-pointer"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-[12.5px] text-zinc-500 select-none cursor-pointer hover:text-zinc-700 transition-colors"
                  >
                    I agree to the terms &amp; conditions
                  </label>
                </div>

                {/* Action Interactive Execution Trigger Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-2.5 bg-teal-700 text-white text-[13px] font-medium rounded-lg transition-all duration-200 hover:bg-teal-800 hover:cursor-pointer active:scale-[0.98]"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded Map Container Block */}
      <div className="w-full mt-16">
        <iframe
          className="w-full h-100 grayscale-[15%] contrast-105 opacity-95 transition-all duration-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5087618395473!2d80.49893947333189!3d6.949153918074029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae39efe7c3c61ed%3A0xbc02c45fd24b0709!2sAberdeen%20Waterfall!5e0!3m2!1sen!2str!4v1782230835268!5m2!1sen!2str"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;