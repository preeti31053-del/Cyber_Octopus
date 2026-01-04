import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "WiBLE Ducky",
    subtitle: "Control Anything Anywhere Wirelessly",
    description: "ESP32-WiBLE Ducky BY Cyber Octopus",
    gradient: "from-slate-900 via-slate-800 to-teal-900",
  },
  {
    id: 2,
    title: "WiFi Deauther",
    subtitle: "Professional Network Testing Tool",
    description: "2.4 GHz WiFi Testing Device",
    gradient: "from-slate-900 via-emerald-900 to-slate-800",
  },
  {
    id: 3,
    title: "Penetration Testing",
    subtitle: "Advanced Security Tools",
    description: "Professional Grade Ethical Hacking Equipment",
    gradient: "from-slate-900 via-cyan-900 to-slate-800",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden group">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${banner.gradient} flex items-center`}>
            <div className="container flex items-center justify-between">
              {/* Left: Circuit board illustration */}
              <div className="hidden md:block w-1/3">
                <div className="relative">
                  <div className="w-48 h-32 bg-green-900/50 rounded-lg border-2 border-green-500/30 p-4">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-green-400/60" />
                      ))}
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="h-1 w-full bg-green-500/40 rounded" />
                      <div className="h-1 w-3/4 bg-green-500/40 rounded" />
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-24 h-16 bg-slate-700 rounded border border-slate-500/50" />
                </div>
              </div>

              {/* Center: Content */}
              <div className="flex-1 text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{banner.title}</h2>
                <p className="text-xl text-primary/90 mb-4">"{banner.subtitle}"</p>
                <div className="bg-slate-800/80 rounded-lg p-4 inline-block backdrop-blur-sm border border-slate-600/50">
                  <p className="text-primary text-sm font-mono mb-2">{banner.description}</p>
                  <div className="bg-slate-900/80 rounded p-2 text-left">
                    <p className="text-green-400 text-xs font-mono">Enter or edit HID script:</p>
                    <p className="text-slate-400 text-xs font-mono mt-1">Type HID script here...</p>
                  </div>
                </div>
              </div>

              {/* Right: Hacker silhouette */}
              <div className="hidden lg:block w-1/4">
                <div className="relative">
                  <div className="w-32 h-40 bg-gradient-to-b from-slate-700 to-transparent rounded-t-full opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
