import aboutImage from '../../../assets/offers/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#FDFBF9] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Side: Image with Luxury Framed Accent */}
          <div className="col-span-1 md:col-span-6 relative flex justify-center md:justify-start">
            
            {/* Elegant minimalist structural border instead of a floating blue bubble */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b3925a]/20 translate-x-2 translate-y-2 hidden sm:block z-0 pointer-events-none" />
            
            {/* Main Section Image Container */}
            <div className="w-full max-w-md md:max-w-full aspect-square overflow-hidden shadow-[0_15px_45px_rgba(44,37,32,0.04)] relative z-10 rounded-sm border border-gray-100">
              <img 
                src={aboutImage} 
                alt="Luxury Hotel Exterior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center text-left">
            
            {/* Subtitle - Updated to Luxury Gold Accent */}
            <span className="text-xs font-semibold tracking-[0.25em] text-[#b3925a] uppercase mb-4 block font-sans">
              About Royalking
            </span>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2c2520] uppercase tracking-wide leading-snug mb-6 max-w-md">
              Luxury Hotel in The Heart of San Francisco.
            </h2>
            
            {/* Description Body Text */}
            <p className="text-xs sm:text-sm font-sans text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer 
              ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales 
              metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis 
              amet odio est. Sit semper et velit fusce.
            </p>
            
            {/* Action Button - Updated to Premium Dark/Gold Theme */}
            <div>
              <button className="px-8 py-3.5 bg-[#b3925a] text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-[#917343] hover:shadow-md active:scale-95 cursor-pointer">
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