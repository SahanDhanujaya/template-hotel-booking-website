import React from 'react';
import aboutImage from '../../../assets/offers/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg'; // Adjust your image path if needed

const AboutSection = () => {
  return (
    <section className="w-full bg-[#FDFBF9] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Side: Image with Blue Decorative Background Circle */}
          <div className="col-span-1 md:col-span-6 relative flex justify-center md:justify-start">
            
            {/* Abstract blue accent circle behind top-left of image matching hero accent style */}
            <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full border-[24px] border-blue-50/60 opacity-70 pointer-events-none hidden sm:block z-0" />
            
            {/* Main Section Image */}
            <div className="w-full max-w-md md:max-w-full aspect-square overflow-hidden shadow-sm relative z-10">
              <img 
                src={aboutImage} 
                alt="Luxury Hotel Exterior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center text-left">
            
            {/* Subtitle - Updated to tracking Blue */}
            <span className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase mb-4 block">
              About Royalking
            </span>
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#1E1B29] leading-tight mb-6 max-w-md">
              Luxury Hotel in The Heart of San Francisco.
            </h2>
            
            {/* Description Body Text */}
            <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer 
              ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales 
              Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis 
              amet odio est. Sit semper et velit fusce.
            </p>
            
            {/* Action Button - Updated to Blue Brand Theme */}
            <div>
              <button className="px-8 py-3 bg-sky-500 rounded-lg text-white font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-sky-600 hover:shadow-lg active:scale-95">
                Discover More
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;