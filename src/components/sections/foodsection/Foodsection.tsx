const FoodSection = () => {
  // Offers and Food Packages Data
  const offers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      title: "Kick off Summer in NYC",
      description:
        "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      title: "Free Breakfast Packages",
      description:
        "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      title: "The Signature Collection",
      description:
        "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
    },
  ];

  return (
    <section className="w-full bg-white pt-24 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Subheading Tag */}
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#b3925a] uppercase block mb-3 font-sans">
          Exclusive Offers
        </span>

        {/* Section Main Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#2c2520] uppercase tracking-wide leading-tight mb-20 max-w-xl mx-auto">
          Featured Special Offers
        </h2>

        {/* Offers Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {offers.map((offer) => (
            <div key={offer.id} className="flex flex-col items-center group">
              
              {/* Image Segment Wrapper */}
              <div className="w-[85%] aspect-4/3 overflow-hidden shadow-[0_15px_40px_rgba(44,37,32,0.04)] z-10 relative rounded-sm">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Content Box Container */}
              <div className="bg-white border border-gray-100 shadow-[0_12px_40px_rgba(44,37,32,0.02)] w-full -mt-16 pt-24 pb-10 px-6 sm:px-8 flex flex-col items-center justify-center text-center relative z-0 rounded-sm">
                
                {/* Package Heading */}
                <h3 className="text-lg font-serif text-[#2c2520] uppercase tracking-wide max-w-50 leading-snug mb-4 group-hover:text-[#b3925a] transition-colors duration-300">
                  {offer.title}
                </h3>

                {/* Subtext Paragraph */}
                <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed max-w-60 mb-8">
                  {offer.description}
                </p>

                {/* Sharp Minimalist Theme Square Action Button */}
                <button
                  className="w-11 h-11 rounded-sm border border-gray-200 shadow-sm bg-white text-gray-400 flex items-center justify-center transition-all duration-300 hover:bg-[#b3925a] hover:border-[#b3925a] hover:text-white hover:cursor-pointer active:scale-95"
                  aria-label={`View details for ${offer.title}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
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