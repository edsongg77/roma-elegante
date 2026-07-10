import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}

export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      <div className="container-x relative flex h-full flex-col justify-end pb-16 pt-32">
        <span className="eyebrow animate-fade-in">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-foreground animate-fade-up sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base text-muted-foreground animate-fade-up sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
