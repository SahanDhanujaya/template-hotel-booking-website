import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const TopScrollButton = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if user scrolls down more than 300px
      if (window.scrollY > 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add the scroll event listener when component mounts
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the listener when component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className={`
        text-white flex justify-center items-center h-11 w-11 fixed bottom-6 right-6 
        bg-[#b3925a] hover:bg-[#917343] rounded-sm transition-all duration-300 z-[999] 
        shadow-[0_4px_20px_rgba(44,37,32,0.15)] hover:cursor-pointer active:scale-95
        ${isScroll ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default TopScrollButton;