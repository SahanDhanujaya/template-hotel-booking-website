import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sahan Dhanujaya",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
      comment: "The variety of food options here is incredible! Every dish we ordered tasted authentic and fresh. Highly recommended.",
      rating: 5,
    },
    {
      id: 2,
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
      comment: "Beautiful ambiance and excellent service. The fusion seafood platter was an absolute highlight of our stay.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aadhil Ahmed",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
      comment: "Great spot for a family dinner. The traditional rice and curry options are exceptional, though it can get a bit crowded during weekend dinner hours.",
      rating: 4,
    },
    {
      id: 4,
      name: "Minuki Perera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
      comment: "Love the backdrop-blur aesthetic of the dining space. The desserts are to die for, especially the local fusion sweets!",
      rating: 5,
    },
    {
      id: 5,
      name: "David Miller",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=faces&q=80",
      comment: "Clean tables, quick service, and friendly staff. The live music added a perfect touch to a great meal.",
      rating: 4,
    },
  ];

  // Pagination state tracking the index of the first visible card
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + cardsPerPage < reviews.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Slice the array to show exactly up to 4 cards starting from the currentIndex
  const visibleReviews = reviews.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div id="reviews" className="w-full bg-[#FDFBF9] pt-24 pb-32 px-4 sm:px-6 md:px-12 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-14 relative z-10">
        <div className="text-left">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#b3925a] uppercase block mb-3">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2520] uppercase tracking-wide leading-tight max-w-xl">
            What Our Customers Say
          </h2>
        </div>

        {/* Dynamic Control Buttons */}
        <div className="flex items-center gap-3 mt-8 md:mt-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3.5 rounded-sm border border-gray-200 bg-white shadow-sm transition-all duration-300 focus:outline-none ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed border-gray-100"
                : "hover:bg-[#b3925a] hover:text-white hover:border-[#b3925a] active:scale-95 cursor-pointer"
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= reviews.length}
            className={`p-3.5 rounded-sm border border-gray-200 bg-white shadow-sm transition-all duration-300 focus:outline-none ${
              currentIndex + cardsPerPage >= reviews.length
                ? "opacity-30 cursor-not-allowed border-gray-100"
                : "hover:bg-[#b3925a] hover:text-white hover:border-[#b3925a] active:scale-95 cursor-pointer"
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200 p-7 rounded-sm shadow-[0_15px_40px_rgba(44,37,32,0.01)] hover:shadow-[0_20px_50px_rgba(44,37,32,0.04)] hover:border-gray-200 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
          >
            <div>
              <div className="flex justify-between items-start mb-5">
                {/* Star Rating Row */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating
                          ? "fill-[#b3925a] text-[#b3925a]"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-gray-200 group-hover:text-[#b3925a]/30 transition-colors duration-300 transform rotate-180" />
              </div>

              {/* Review Comment Text */}
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6 text-left">
                "{review.comment}"
              </p>
            </div>

            {/* Author Profile Frame */}
            <div className="flex items-center gap-3.5 pt-5 border-t border-gray-100">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-sm object-cover shadow-sm border border-gray-100 group-hover:border-[#b3925a]/40 transition-colors duration-300"
              />
              <div className="text-left">
                <h4 className="font-serif text-sm text-[#2c2520] uppercase tracking-wide leading-tight group-hover:text-[#b3925a] transition-colors duration-200">
                  {review.name}
                </h4>
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mt-0.5 block">
                  Verified Guest
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* External Map Trigger Link */}
      <div className="max-w-7xl mx-auto mt-10 relative z-10 text-left">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.google.com/?cid=13547606544912942857&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=TR&source=embed"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#b3925a] hover:text-[#2c2520] uppercase transition-colors duration-200"
        >
          See Google Reviews <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;