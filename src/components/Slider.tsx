import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Modern Solutions",
    description: "Empowering your digital journey"
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Technology First",
    description: "Leading the way in innovation"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Smart Working",
    description: "Revolutionizing how we work"
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Future Ready",
    description: "Preparing for tomorrow, today"
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl animate-fade-in animation-delay-200">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white scale-100"
                : "bg-white/50 scale-90 hover:scale-95"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;