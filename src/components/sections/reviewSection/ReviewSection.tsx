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
    <div id="reviews" className="w-full bg-[#F5F6F8] pt-24 pb-32 px-4 sm:px-6 md:px-12 relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-14 relative z-10">
        <div className="text-left">
          <span className="text-[12px] font-medium text-teal-700 block mb-3">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight max-w-xl">
            What our customers say
          </h2>
        </div>

        {/* Dynamic Control Buttons */}
        <div className="flex items-center gap-2 mt-8 md:mt-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-lg border border-zinc-200 bg-white transition-all duration-300 focus:outline-none ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed border-zinc-100"
                : "hover:bg-teal-700 hover:text-white hover:border-teal-700 active:scale-95 cursor-pointer"
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-4.5 h-4.5 stroke-[1.75]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= reviews.length}
            className={`p-3 rounded-lg border border-zinc-200 bg-white transition-all duration-300 focus:outline-none ${
              currentIndex + cardsPerPage >= reviews.length
                ? "opacity-30 cursor-not-allowed border-zinc-100"
                : "hover:bg-teal-700 hover:text-white hover:border-teal-700 active:scale-95 cursor-pointer"
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-4.5 h-4.5 stroke-[1.75]" />
          </button>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-zinc-200 p-6 rounded-2xl hover:shadow-md hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
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
                          ? "fill-amber-400 text-amber-400"
                          : "text-zinc-200"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-zinc-200 group-hover:text-teal-600/40 transition-colors duration-300 transform rotate-180" />
              </div>

              {/* Review Comment Text */}
              <p className="text-zinc-500 text-[13px] leading-relaxed mb-6 text-left">
                "{review.comment}"
              </p>
            </div>

            {/* Author Profile Frame */}
            <div className="flex items-center gap-3.5 pt-5 border-t border-zinc-100">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover border border-zinc-100 group-hover:border-teal-400/50 transition-colors duration-300"
              />
              <div className="text-left">
                <h4 className="font-semibold text-[13px] text-zinc-900 leading-tight group-hover:text-teal-700 transition-colors duration-200">
                  {review.name}
                </h4>
                <span className="text-[11px] font-medium text-zinc-400 mt-0.5 block">
                  Verified guest
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
          className="inline-flex items-center gap-2 text-[12.5px] font-medium text-teal-700 hover:text-teal-800 transition-colors duration-200"
        >
          See Google reviews <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;