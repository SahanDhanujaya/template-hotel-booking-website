import aboutImage from '../../../assets/offers/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg';
import { ArrowRightIcon } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F5F6F8] font-sans py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left Side: Image */}
          <div className="col-span-1 md:col-span-6 relative flex justify-center md:justify-start">

            {/* Soft ambient accent glow instead of a structural border offset */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-teal-200/25 rounded-full blur-[80px] hidden sm:block z-0 pointer-events-none" />

            {/* Main Section Image Container */}
            <div className="w-full max-w-md md:max-w-full aspect-square overflow-hidden shadow-sm relative z-10 rounded-2xl border border-zinc-200">
              <img
                src={aboutImage}
                alt="Modern hotel exterior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center text-left">

            <span className="text-[12px] font-medium text-teal-700 mb-4 block">
              About Royalking
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 leading-snug mb-6 max-w-md">
              A modern stay in the heart of San Francisco.
            </h2>

            <p className="text-[13.5px] text-zinc-500 leading-relaxed mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer
              ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales
              metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis
              amet odio est. Sit semper et velit fusce.
            </p>

            <div>
              <button className="inline-flex items-center gap-2 px-7 py-3 bg-teal-700 text-white text-[13px] font-medium rounded-lg transition-all duration-200 hover:bg-teal-800 hover:shadow-md active:scale-95 cursor-pointer">
                Discover more
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;