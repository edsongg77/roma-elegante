import { useEffect, useState } from "react";

export interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

export function HeroSlider({ slides, intervalMs = 5000 }: HeroSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={`h-full w-full object-cover ${
              i === active ? "animate-slow-zoom" : ""
            }`}
          />
        </div>
      ))}

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/35 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[oklch(0.04_0_0)]/20" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para o slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="relative h-1 w-10 overflow-hidden bg-foreground/25"
          >
            {i === active && (
              <span
                key={active}
                className="absolute inset-y-0 left-0 bg-gold"
                style={{ animation: `hero-progress ${intervalMs}ms linear forwards` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
