const FoodSection = () => {
  // Offers and Food Packages Data
  const offers = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      title: "Kick off Summer in NYC",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      title: "Free Breakfast Packages",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      title: "The Signature Collection",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    }
  ];

  return (
    <section className="w-full bg-white pt-24 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Subheading Tag */}
        <span className="text-[11px] font-bold tracking-[0.25em] text-blue-300 uppercase block mb-3">
          Exclusive Offers
        </span>
        
        {/* Section Main Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1F2432] leading-tight mb-20 max-w-xl mx-auto">
          Featured Special Offers
        </h2>

        {/* Offers Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {offers.map((offer) => (
            <div key={offer.id} className="flex flex-col items-center group">
              
              {/* Image Segment Wrapper */}
              <div className="w-[85%] aspect-4/3 overflow-hidden shadow-md z-10 relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Content Box Container */}
              <div className="bg-white border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.03)] w-full -mt-16 pt-24 pb-10 px-6 sm:px-8 flex flex-col items-center justify-center text-center relative z-0">
                
                {/* Package Heading */}
                <h3 className="text-xl font-serif text-[#1F2432] max-w-50 leading-snug mb-4 group-hover:text-sky-500 transition-colors duration-300">
                  {offer.title}
                </h3>

                {/* Subtext Paragraph */}
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-60 mb-8">
                  {offer.description}
                </p>

                {/* Sky Blue Theme Circular Arrow Link Button */}
                <button 
                  className="w-11 h-11 rounded-full border border-slate-100 shadow-sm bg-white text-gray-500 flex items-center justify-center transition-all duration-300 hover:bg-sky-500 hover:border-sky-500 hover:text-white hover:scale-110 active:scale-95"
                  aria-label={`View details for ${offer.title}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Background Decorative Accent Strip Splitting the Page Section Bottom Grid */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-[#FDFBF9] pointer-events-none z-0" />
    </section>
  );
};

export default FoodSection;