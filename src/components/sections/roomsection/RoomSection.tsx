import { useState } from "react";

const RoomsSection = () => {
  // Existing Rooms Grid Data
  const rooms = [
    {
      id: 1,
      title: "Luxury Room",
      price: "$55.0",
      description:
        "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Delux Room",
      price: "$55.0",
      description:
        "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Luxury Room",
      price: "$55.0",
      description:
        "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Room Facilities / Amenities Data
  const amenities = [
    {
      id: 1,
      label: "FAST WIFI",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a9.75 9.75 0 0113.788 0M1.924 8.674a14.25 14.25 0 0120.152 0M12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "COFFEE",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75h4.5m-4.5 2.25h4.5M3 18.75h18M6.75 18.75V7.5a2.25 2.25 0 012.25-2.25h6.75A2.25 2.25 0 0118 7.5v11.25m-11.25 0h11.25"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "BATH",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10.5h18M3 14.25h18M5.25 6h13.5A2.25 2.25 0 0121 8.25v7.5A2.25 2.25 0 0118.75 18H5.25A2.25 2.25 0 013 15.75v-7.5A2.25 2.25 0 015.25 6z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "PARKING SPACE",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5m3 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.5m-16.5-3h16.5M3 12h18M3 8.25h18"
          />
        </svg>
      ),
    },
    {
      id: 5,
      label: "SWIMMING POOL",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12h19.5M2.25 14.25h19.5M2.25 16.5h19.5M2.25 9.75h19.5"
          />
        </svg>
      ),
    },
    {
      id: 6,
      label: "LAUNDRY SERVICE",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 15a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      label: "BREAKFAST",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18M3 12h18"
          />
        </svg>
      ),
    },
    {
      id: 8,
      label: "SPA & WELLNESS",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a3 3 0 100-6 3 3 0 000 6zM12 13.5a3 3 0 100-6 3 3 0 000 6zM12 20.25a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
      ),
    },
    {
      id: 9,
      label: "MEETING ROOM",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v16.5M20.25 3v16.5M3 5.25h18M3 9.75h18M3 14.25h18"
          />
        </svg>
      ),
    },
    {
      id: 10,
      label: "WELCOME DRINK",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 21H14.25M12 13.5V21M6.375 5.25h11.25L12 13.5 6.375 5.25z"
          />
        </svg>
      ),
    },
  ];

  // Panoramic Slider Data
  const panoramicSlides = [
    {
      id: 0,
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      title: "Rooms & Suites",
      subtitle: "DISCOVER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est.",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      title: "Presidential Suites",
      subtitle: "LUXURY",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      title: "Penthouse Overlook",
      subtitle: "EXCLUSIVE",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  // Slider State management
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === panoramicSlides.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? panoramicSlides.length - 1 : prev - 1,
    );
  };

  return (
    <section className="w-full bg-white pt-24 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Tagline */}
        <span className="text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-3">
          Discover
        </span>

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1F2432] leading-tight mb-16">
          Rooms & Suites
        </h2>

        {/* Rooms Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-32">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white flex flex-col overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Image & Price Tag Wrapper */}
              <div className="w-full aspect-4/3 overflow-hidden z-9">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Room Content Card */}
              <div className="relative pt-10 pb-8 px-6 sm:px-8 flex flex-col items-start text-left grow">
                {/* Star Ratings */}
                <div className="flex gap-1 mb-4 text-amber-400 text-sm">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>{index < room.rating ? "★" : "☆"}</span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-[#1F2432] mb-3 group-hover:text-sky-500 transition-colors">
                  {room.title}
                </h3>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Book Now Interactive Button */}
                <button className="mt-auto px-6 py-2.5 border border-slate-200 rounded-md text-xs font-semibold uppercase tracking-wider text-gray-600 transition-all duration-300 hover:bg-sky-500 hover:border-sky-500 hover:text-white active:scale-[0.97]">
                  Book Now
                </button>
                {/* Floating Price Tag Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-xs text-gray-500 font-light tracking-wide px-6 py-2.5 rounded-full shadow-md whitespace-nowrap border border-slate-50 z-10">
                  Start from{" "}
                  <span className="text-sky-500 font-medium">{room.price}</span>
                  /night
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ENHANCED NESTED SECTION: Our Best Amenities Grid */}
        <div className="mb-32 max-w-5xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-3">
            Discover
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2432] mb-6">
            Our Best Amenities
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            integer ultrices suspendisse varius etiam est. Est, felis, tempus
            nec vitae orci sodales Metus, velit nec at diam in sed.
          </p>

          {/* 5 Column Grid Layout matching the design specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-100 p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] rounded-sm group hover:border-sky-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-gray-400 group-hover:text-sky-400 transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold tracking-wider text-gray-500 group-hover:text-[#1F2432] transition-colors whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW SECTION: Panoramic Widescreen Slider Stage */}
      <div className="w-full relative px-4 sm:px-0">
        <div className="max-w-360 mx-auto relative h-120 sm:h-135 md:h-145 flex items-center justify-center">
          {/* Track Slides */}
          <div className="w-full h-full flex gap-6 items-center justify-center relative">
            {panoramicSlides.map((slide, index) => {
              // Calculate slide position relative to current active state
              let position =
                "opacity-0 scale-95 translate-x-full pointer-events-none";
              if (index === currentSlide) {
                position = "opacity-100 scale-100 z-20 translate-x-0";
              } else if (
                index === currentSlide - 1 ||
                (currentSlide === 0 && index === panoramicSlides.length - 1)
              ) {
                position =
                  "opacity-40 scale-90 -translate-x-[75%] sm:-translate-x-[65%] z-10 pointer-events-none";
              } else if (
                index === currentSlide + 1 ||
                (currentSlide === panoramicSlides.length - 1 && index === 0)
              ) {
                position =
                  "opacity-40 scale-90 translate-x-[75%] sm:translate-x-[65%] z-10 pointer-events-none";
              }

              return (
                <div
                  key={slide.id}
                  className={`absolute w-[90%] sm:w-[75%] md:w-[65%] h-full rounded-sm overflow-hidden shadow-xl transition-all duration-700 ease-in-out ${position}`}
                >
                  {/* Backdrop Slide Cover Image */}
                  <div className="absolute inset-0 bg-gray-900/10 z-10" />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-transform duration-1200 ease-out ${
                      index === currentSlide ? "scale-100" : "scale-110"
                    }`}
                  />

                  {/* Centered Overlay Information Content Badge */}
                  {index === currentSlide && (
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-20 animate-fadeIn">
                      <div className="bg-white max-w-md w-full py-10 px-8 sm:px-12 text-center shadow-2xl relative">
                        {/* Navigation Left Control Anchor Arrow */}
                        <button
                          onClick={prevSlide}
                          className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-500 absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-105 active:scale-95"
                          aria-label="Previous slide"
                        >
                          <span className="text-base font-light">←</span>
                        </button>

                        {/* Slide Texts */}
                        <span className="text-[10px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-2.5">
                          {slide.subtitle}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#1F2432] leading-snug mb-4">
                          {slide.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs mx-auto">
                          {slide.description}
                        </p>

                        {/* Navigation Right Control Anchor Arrow */}
                        <button
                          onClick={nextSlide}
                          className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-500 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-105 active:scale-95"
                          aria-label="Next slide"
                        >
                          <span className="text-base font-light">→</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Visual Ground Highlight Overlay Splitting Strip */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-[#F9F3EE]/40 pointer-events-none z-0" />
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
