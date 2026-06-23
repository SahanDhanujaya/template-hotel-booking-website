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
    <div id="reviews" className="w-full bg-white pt-28 pb-36 px-4 sm:px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Decorative modern ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-14 relative z-10">
        <div>
          <span className="text-start text-xs font-bold tracking-[0.3em] text-blue-300 uppercase block mb-3 font-serif">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 leading-[1.15] tracking-tight max-w-xl">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">Customers Say</span>
          </h2>
        </div>

        {/* Dynamic Control Buttons */}
        <div className="flex items-center gap-3 mt-8 md:mt-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3.5 rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100 ${
              currentIndex === 0 
                ? "opacity-30 cursor-not-allowed border-slate-100" 
                : "hover:bg-blue-50/50 hover:text-blue-300 hover:border-blue-200 active:scale-95 cursor-pointer"
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.25]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= reviews.length}
            className={`p-3.5 rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100 ${
              currentIndex + cardsPerPage >= reviews.length
                ? "opacity-30 cursor-not-allowed border-slate-100" 
                : "hover:bg-blue-50/50 hover:text-blue-500 hover:border-blue-200 active:scale-95 cursor-pointer"
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.25]" />
          </button>
        </div>
      </div>

      {/* Modern Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 font-serif">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white/80 backdrop-blur-sm border border-slate-100/80 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-white transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
          >
            <div>
              <div className="flex justify-between items-start mb-5">
                {/* Star Rating Row */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-200/80 group-hover:text-blue-100 transition-colors duration-300 transform rotate-180" />
              </div>

              {/* Review Comment Text */}
              <p className="text-slate-600 text-[14px] leading-relaxed mb-6 font-normal">
                "{review.comment}"
              </p>
            </div>

            {/* Author Profile Frame */}
            <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-10 h-10 rounded-xl object-cover shadow-sm border border-slate-100 group-hover:border-blue-200/60 transition-colors duration-300"
              />
              <div className="text-left">
                <h4 className="font-extralight text-[14px] text-slate-800 leading-tight group-hover:text-blue-400 transition-colors duration-200">
                  {review.name}
                </h4>
                <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase mt-0.5 block">
                  Verified Guest
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 relative z-10 font-serif">
        <a target="_blank" href="https://maps.google.com/?cid=13547606544912942857&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=TR&source=embed" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 font-medium text-sm transition-colors duration-200">
          See Google Reviews <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;