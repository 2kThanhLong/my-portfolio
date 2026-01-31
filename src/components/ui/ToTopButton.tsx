import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const ToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-transform duration-300 cursor-pointer",
        "bg-primary text-primary-foreground hover:opacity-90 hover:scale-105",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      aria-label="Scroll to top">
      <ArrowUp size={24} />
    </button>
  );
};
