import offerImage1 from '../../../assets/offers/chelsea-gates-0653_wY0nRc-unsplash.jpg';
import offerImage2 from '../../../assets/offers/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg';
import offerImage3 from '../../../assets/offers/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg';

const HomeSection = () => {

  const exclusiveOffers = [
    {
      id: 1,
      title: "Kick off Summer in NYC",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
      image: offerImage1, 
    },
    {
      id: 2,
      title: "Free Breakfast Packages",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
      image: offerImage2,
    },
    {
      id: 3,
      title: "The Signature Collection",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
      image: offerImage3,
    }
  ];

  return (
    <section className="relative w-full bg-[#FDFBF9] flex flex-col justify-between">
      
      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        
        {/* Left Side: Text Content */}
        <div className="md:col-span-6 flex flex-col justify-center text-left relative">
          
          {/* Abstract background circle accent (top left) */}
          <div className="absolute -top-20 -left-20 w-40 h-40 border-24 border-blue-100 rounded-full opacity-40 pointer-events-none hidden sm:block" />

          <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4 relative z-10">
            Summer Vacations
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#1E1B29] leading-tight mb-6 relative z-10">
            Your <br />
            Home For <br />
            Vacation.
          </h1>
          
          <p className="text-sm sm:text-base text-gray-500 max-w-md leading-relaxed mb-8 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ridiculus tellus.
          </p>
          
          {/* Action Buttons & Navigation */}
          <div className="flex items-center gap-6 relative z-10">
            <button className="px-8 py-3 bg-blue-400 rounded-lg text-white font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-blue-500 hover:shadow-lg active:scale-95">
              Book Room
            </button>
            
            {/* Slider Controls */}
            <div className="flex gap-2 ml-4">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all hover:border-blue-300 hover:text-blue-500 active:scale-90">
                <span className="text-lg">←</span>
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all hover:border-blue-300 hover:text-blue-500 active:scale-90">
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Splatter/Mask Transition Effect */}
        <div className="md:col-span-6 h-87.5 sm:h-112.5 md:h-125 lg:h-137.5 relative w-full overflow-hidden md:overflow-visible">
          <div className="absolute inset-0 md:-left-12 lg:-left-20 z-0 overflow-hidden">
            <img 
              src="/hero.jpg" 
              alt="Luxury Resort Architecture" 
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 "
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)',
              }}
            />
          </div>
          {/* Fallback pattern graphic replicating the paint splatter on left of image */}
          <div className="absolute top-0 bottom-0 -left-3.75 w-8 bg-linear-to-r from-[#FDFBF9] to-transparent z-10 hidden md:block" />
        </div>

      </div>

      {/* Floating Booking Widget */}
      <div className="w-full bg-[#FDFBF9] md:bg-[#FDFBF9]/80 md:backdrop-blur-md border-t border-[#F5ECE5] py-6 border-b relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-end">
            
            {/* Check-In */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Check - In</label>
              <input 
                type="text" 
                defaultValue="05/23/2026" 
                className="w-full bg-white border border-[#EAE1DA] px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-300"
              />
            </div>

            {/* Check-Out */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Check - Out</label>
              <input 
                type="text" 
                defaultValue="05/24/2026" 
                className="w-full bg-white border border-[#EAE1DA] px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-300"
              />
            </div>

            {/* Rooms Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Rooms:</label>
              <select className="w-full bg-white border border-[#EAE1DA] px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-300 appearance-none cursor-pointer">
                <option>1 Room</option>
                <option>2 Rooms</option>
              </select>
            </div>

            {/* Guests Mix */}
            <div className="grid grid-cols-2 gap-2 col-span-1 md:col-span-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Adults:</label>
                <select className="w-full bg-white border border-[#EAE1DA] px-2 py-2 text-sm text-gray-700 outline-none focus:border-blue-300 appearance-none cursor-pointer">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Child:</label>
                <select className="w-full bg-white border border-[#EAE1DA] px-2 py-2 text-sm text-gray-700 outline-none focus:border-blue-300 appearance-none cursor-pointer">
                  <option>1 Children</option>
                  <option>0 Children</option>
                </select>
              </div>
            </div>

            {/* Availability Submit Button */}
            <div className="col-span-2 md:col-span-1">
              <button className="w-full bg-blue-400 text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 transition-all hover:bg-blue-500 active:scale-[0.98]">
                Check Availability
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Featured Exclusive Offers */}
      <div className="w-full bg-[#FDFBF9] pt-24 pb-32 relative">
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[#F9F3EE]/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-blue-300 uppercase block mb-3">
            Exclusive Offers
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F2432] leading-tight mb-16">
            Featured Special <br /> Offers
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
            {exclusiveOffers.map((offer) => (
              <div key={offer.id} className="flex flex-col items-center group relative">
                
                {/* Image Container */}
                <div className="w-[88%] sm:w-[85%] md:w-[90%] aspect-4/3 overflow-hidden shadow-md relative z-20 translate-y-6 group-hover:translate-y-4 transition-transform duration-300">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Block Content Card */}
                <div className="w-full bg-white pt-12 pb-12 px-6 sm:px-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col items-center justify-between min-h-55 relative z-10">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-serif text-[#1F2432] leading-snug mb-3 max-w-50">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed max-w-60">
                      {offer.description}
                    </p>
                  </div>
                </div>

                {/* Circular Overlapping CTA Arrow Button */}
                <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-md border border-gray-50 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 transition-all duration-300 hover:bg-blue-300 hover:text-white hover:scale-105 active:scale-95">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;