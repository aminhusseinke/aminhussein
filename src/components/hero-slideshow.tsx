import { useEffect, useState } from "react";

export type HeroSlideshowImage = {
  src: string;
  position?: string;
};

export function HeroSlideshow({
  images,
  interval = 7500,
}: {
  images: HeroSlideshowImage[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt=""
          loading={index === 0 ? "eager" : "lazy"}
          style={{ objectPosition: image.position ?? "center" }}
          className={`photo-hero-image ${index === active ? "is-active" : ""}`}
        />
      ))}
      <div className="photo-hero-scrim absolute inset-0" />
    </div>
  );
}
