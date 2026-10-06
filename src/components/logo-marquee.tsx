export type LogoMarqueeItem = {
  name: string;
  src?: string;
  // Set when the source file is white/light artwork meant for a dark
  // background — inverts it so it reads on this light-background marquee.
  invert?: boolean;
  // Text-mark size when there's no `src` yet — lets one placeholder sit at a
  // different visual weight than the rest (e.g. to better match its
  // neighbors' logo sizes) without changing every other mark.
  placeholderSize?: string;
  // Override this logo's rendered height (default comes from
  // .logo-marquee-item) when its own artwork reads smaller or larger than
  // its neighbors at the same box size.
  imageHeight?: string;
};

export function LogoMarquee({ items }: { items: LogoMarqueeItem[] }) {
  // Rendered twice back-to-back so the track can loop seamlessly via
  // translateX(-50%) — the second copy is aria-hidden since it's decorative.
  const track = [...items, ...items];

  return (
    <div className="logo-marquee">
      <div className="logo-marquee-track">
        {track.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="logo-marquee-item"
            aria-hidden={index >= items.length}
            style={item.imageHeight ? { height: item.imageHeight } : undefined}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.name}
                loading="eager"
                className={item.invert ? "logo-marquee-invert" : undefined}
              />
            ) : (
              <span
                className="logo-marquee-placeholder"
                style={item.placeholderSize ? { fontSize: item.placeholderSize } : undefined}
              >
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
