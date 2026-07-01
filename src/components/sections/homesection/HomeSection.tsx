import { useState } from "react";
import offerImage1 from "../../../assets/offers/chelsea-gates-0653_wY0nRc-unsplash.jpg";
import offerImage2 from "../../../assets/offers/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";
import offerImage3 from "../../../assets/offers/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg";
import type { BookingAvailability } from "../../../types/bookingTypes";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";

const HomeSection = () => {
  const exclusiveOffers = [
    {
      id: 1,
      title: "Kick off Summer in NYC",
      description:
        "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
      image: offerImage1,
    },
    {
      id: 2,
      title: "Free Breakfast Packages",
      description:
        "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
      image: offerImage2,
    },
    {
      id: 3,
      title: "The Signature Collection",
      description:
        "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
      image: offerImage3,
    },
  ];

  const [formData, setFormData] = useState<BookingAvailability>({
    checkIn: "2026-05-20",
    checkOut: "2026-05-24",
    rooms: ["Room 1", "Room 2"],
    adults: 2,
    children: 1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData submitted:", formData);
  };

  const inputClass =
    "w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-[13px] font-medium text-zinc-900 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10 cursor-pointer";

  return (
    <section className="relative w-full bg-[#F5F6F8] font-sans flex flex-col justify-between">
      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 py-2 md:py-12 lg:py-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        {/* Left Side: Text Content */}
        <div className="md:col-span-6 flex flex-col justify-center text-left relative">

          <span className="text-[12px] font-medium text-teal-700 mb-4 relative z-10">
            Summer vacations
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.12] mb-6 relative z-10 tracking-tight">
            Your home <br />
            for vacation.
          </h1>

          <p className="text-[13.5px] text-zinc-500 max-w-md leading-relaxed mb-8 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            ridiculus tellus elementum integer elit tempus.
          </p>

          {/* Action Buttons & Navigation */}
          <div className="flex items-center gap-6 relative z-10">
            <button className="px-7 py-3 bg-teal-700 text-white text-[13px] font-medium rounded-lg transition-all duration-200 hover:bg-teal-800 hover:shadow-md active:scale-95 cursor-pointer">
              Book a room
            </button>

            {/* Slider Controls */}
            <div className="flex gap-2 ml-2">
              <button className="w-9 h-9 border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 transition-all hover:border-teal-600 hover:text-teal-700 active:scale-95 cursor-pointer">
                <ArrowLeftIcon className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 transition-all hover:border-teal-600 hover:text-teal-700 active:scale-95 cursor-pointer">
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Splatter/Mask Transition Effect */}
        <div className="md:col-span-6 h-87.5 sm:h-112.5 md:h-125 lg:h-137.5 relative w-full overflow-hidden md:overflow-visible">
          <div className="absolute inset-0 md:-left-12 lg:-left-20 z-0 overflow-hidden rounded-2xl md:rounded-none">
            <img
              src="/hero.jpg"
              alt="Modern hotel interior"
              className="w-full h-full object-cover object-center scale-100 hover:scale-[1.02] transition-transform duration-700"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 5%, black 45%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 5%, black 45%)",
              }}
            />
          </div>
          <div className="absolute top-0 bottom-0 -left-3.75 w-8 z-10 hidden md:block" />
        </div>
      </div>

      {/* Floating Booking Widget */}
      <div className="w-full bg-white border-t border-b border-zinc-100 py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-end text-left">
            {/* Check-In */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-zinc-500">
                Check-in
              </label>
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className={inputClass}
              />
            </div>

            {/* Check-Out */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-zinc-500">
                Check-out
              </label>
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className={inputClass}
              />
            </div>

            {/* Rooms Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-zinc-500">
                Rooms
              </label>
              <select
                value={formData.rooms[0] || "Room 1"}
                onChange={(e) => setFormData({ ...formData, rooms: [e.target.value] })}
                className={inputClass}
              >
                <option value="Room 1">1 Room</option>
                <option value="Room 2">2 Rooms</option>
              </select>
            </div>

            {/* Guests Mix */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-zinc-500">
                  Adults
                </label>
                <select
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
                  className={inputClass}
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-zinc-500">
                  Child
                </label>
                <select
                  value={formData.children}
                  onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
                  className={inputClass}
                >
                  <option value={0}>0 Children</option>
                  <option value={1}>1 Child</option>
                </select>
              </div>
            </div>

            {/* Availability Submit Button */}
            <div>
              <button type="submit" className="w-full bg-teal-700 text-white text-[13px] font-medium py-2.5 px-4 rounded-lg transition-all hover:bg-teal-800 active:scale-[0.98] cursor-pointer">
                Check availability
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Featured Exclusive Offers */}
      <div className="w-full bg-[#F5F6F8] pt-24 pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[12px] font-medium text-teal-700 block mb-3">
            Exclusive offers
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-16">
            Featured special <br /> offers
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
            {exclusiveOffers.map((offer) => (
              <div
                key={offer.id}
                className="flex flex-col items-center group relative"
              >
                {/* Image Container */}
                <div className="w-[88%] sm:w-[85%] md:w-[90%] aspect-4/3 overflow-hidden shadow-sm relative z-20 translate-y-6 group-hover:translate-y-4 transition-transform duration-300 rounded-2xl">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Block Content Card */}
                <div className="w-full bg-white pt-12 pb-12 px-6 sm:px-8 text-center border border-zinc-200 flex flex-col items-center justify-between min-h-55 relative z-10 rounded-2xl">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[16px] font-semibold text-zinc-900 leading-snug mb-3 max-w-50">
                      {offer.title}
                    </h3>
                    <p className="text-[12.5px] text-zinc-500 leading-relaxed max-w-60">
                      {offer.description}
                    </p>
                  </div>
                </div>

                {/* Circular Overlapping CTA Arrow Button */}
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-400 shadow-md border border-zinc-100 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:border-teal-700 hover:scale-105 active:scale-95 cursor-pointer">
                  <ArrowRightIcon className="w-4 h-4" />
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