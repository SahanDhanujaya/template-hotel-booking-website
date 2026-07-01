import { ArrowRightIcon } from "lucide-react";

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
    <section className="w-full bg-white font-sans pt-24 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Subheading Tag */}
        <span className="text-[12px] font-medium text-teal-700 block mb-3">
          Exclusive Offers
        </span>

        {/* Section Main Title */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight mb-20 max-w-xl mx-auto">
          Featured special offers
        </h2>

        {/* Offers Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {offers.map((offer) => (
            <div key={offer.id} className="flex flex-col items-center group">

              {/* Image Segment Wrapper */}
              <div className="w-[85%] aspect-4/3 overflow-hidden shadow-sm z-10 relative rounded-2xl">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Content Box Container */}
              <div className="bg-white border border-zinc-200 w-full -mt-16 pt-24 pb-10 px-6 sm:px-8 flex flex-col items-center justify-center text-center relative z-0 rounded-2xl">

                {/* Package Heading */}
                <h3 className="text-[16px] font-semibold text-zinc-900 max-w-50 leading-snug mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  {offer.title}
                </h3>

                {/* Subtext Paragraph */}
                <p className="text-[12.5px] text-zinc-500 leading-relaxed max-w-60 mb-8">
                  {offer.description}
                </p>

                {/* Circular Minimalist Action Button */}
                <button
                  className="w-11 h-11 rounded-full border border-zinc-200 shadow-sm bg-white text-zinc-400 flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:border-teal-700 hover:text-white hover:cursor-pointer active:scale-95"
                  aria-label={`View details for ${offer.title}`}
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Background Decorative Accent Strip Splitting the Page Section Bottom Grid */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-[#F5F6F8] pointer-events-none z-0" />
    </section>
  );
};

export default FoodSection;