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

  // It's good practice to return null if you aren't rendering anything
  if (!isScroll) return null;

  return (
    <button
      onClick={handleScroll} // Simplified: no need for an extra anonymous wrapper function
      className="text-white text-center flex justify-center items-center h-12 w-12 p-2 fixed bottom-4 right-4 bg-blue-300 rounded-full shadow-lg hover:cursor-pointer transition-transform hover:scale-110 z-[999] animate-bounce hover:animate-none"
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  );
};

export default TopScrollButton;