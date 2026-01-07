import { memo, useCallback, useMemo, useState } from "react";
import heroImage from "../../assets/Rectangle 12.jpg";
import logoImage from "../../assets/Logo.png";

const navSections = [
  {
    title: "Our Collection",
  },
  { title: "Locations", items: [] },
  { title: "Offers", items: [] },
  { title: "Itineraries", items: [] },
  { title: "Dining", items: [] },
  { title: "Conservation", items: [] },
];

function MainSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const highlightIndex = useMemo(() => 0, []);
  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sailboat on the ocean"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/50" />
      </div>

      <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-[#52535b]/95 md:bg-transparent px-6 py-5 md:backdrop-blur-0 md:px-12">
        {/* Menu/Close Button */}
        {!isMenuOpen ? (
          <button
            aria-label="Open menu"
            onClick={openMenu}
            className="group flex h-10 w-10 flex-col justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 transition"
          >
            <span className="block h-0.5 w-full bg-white transition" />
            <span className="block h-0.5 w-full bg-white transition" />
          </button>
        ) : (
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="relative z-40 flex h-10 w-10 items-center justify-center text-2xl text-white transition hover:text-white/80"
          >
            ✕
          </button>
        )}

        {!isMenuOpen && (
          <>
            {/* Logo – Mobile only */}
            <img
              src={logoImage}
              alt="Hemingways logo"
              className="block md:hidden h-5.3 w-3.76"
            />

            {/* Text – Desktop only */}
            <div className="hidden md:block text-xl tracking-[0.4em] md:text-3xl">
              HEMINGWAYS
            </div>

            {/* Book Now Button */}
            <button className="btn-book-now-text border-t border-b border-white px-4 py-2 uppercase transition cursor-pointer">
              Book Now
            </button>
          </>
        )}
      </header>

      <div className="relative z-10 flex h-[calc(100vh-80px)] items-end justify-center px-6 pb-10 md:px-12 md:pb-14">
        <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-white">
          <span className="h-10 w-10 rounded-full border border-white/50 bg-white/10 text-center leading-10">
            ▶
          </span>
          Watch Full Video
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 flex bg-black/60 backdrop-blur-sm">
          <div className="flex-1" onClick={closeMenu} />

          <div className="relative h-full w-full max-w-2xl overflow-y-auto bg-[#52535b]/95 px-8 py-10 text-gray-200 shadow-2xl md:px-12 md:py-14">
            <div className="mb-8 flex items-center justify-between">
              <img
                src={logoImage}
                alt="Hemingways logo"
                className="h-5.3 w-3.76"
              />
              <button className="btn-book-now-text border-t border-b border-white/70 px-4 py-2 text-white transition hover:bg-white/10">
                Book Now
              </button>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
              <div className="space-y-6 text-lg leading-relaxed">
                {navSections.map((section, index) => (
                  <div key={section.title} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {index === highlightIndex && (
                        <span className="text-2xl text-white">•</span>
                      )}
                      <h3
                        className={`our-collection-heading ${
                          index === highlightIndex
                            ? "text-white"
                            : "text-white/70"
                        }`}
                      >
                        {section.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden space-y-6 text-base text-white/80 md:block">
                <div>
                  <h4 className="menu-location-title text-white">Nairobi</h4>
                  <p className="menu-location-subtitle text-white/70">
                    Capital of Kenya
                  </p>
                </div>
                <div>
                  <h4 className="menu-location-title text-white">
                    Ol Seki Mara
                  </h4>
                  <p className="menu-location-subtitle text-white/70">
                    Maasai Mara Reserve
                  </p>
                </div>
                <div>
                  <h4 className="menu-location-title text-white">Watamu</h4>
                  <p className="menu-location-subtitle text-white/70">
                    Kenyan Coast, North of Mombasa
                  </p>
                </div>
                <div>
                  <h4 className="menu-location-title text-white">
                    Eden Residences
                  </h4>
                  <p className="menu-location-subtitle text-white/70">
                    Nairobi National Park
                  </p>
                </div>
                <div>
                  <h4 className="menu-location-title text-white">
                    Richard&apos;s Camp
                  </h4>
                  <p className="menu-location-subtitle text-white/70">
                    Maasai Mara Reserve
                  </p>
                </div>
                <div>
                  <h4 className="menu-location-title text-white">
                    The Retreat
                  </h4>
                  <p className="menu-location-subtitle text-white/70">
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start gap-3 uppercase tracking-[0.25em] text-white md:flex-row md:flex-wrap">
              {[
                "About Us",
                "FAQ",
                "Rates",
                "Gallery",
                "Press",
                "Stories",
                "Contact Us",
              ].map((link) => (
                <button
                  key={link}
                  className="menu-footer-link transition hover:text-white"
                  onClick={closeMenu}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(MainSection);
