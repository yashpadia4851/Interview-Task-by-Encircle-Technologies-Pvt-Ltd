import { memo, useCallback, useState } from "react";
// import rectCenter from "../../assets/Rectangle 444.png";
// import rectRight from "../../assets/Rectangle 445.png";
// import rectLeft from "../../assets/Rectangle 446.png";
const rectCenter =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop";
const rectRight =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop";
const rectLeft =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop";
import logoImage from "../../assets/SecoundSectionLogo.png";

const slides = [
  {
    id: 1,
    title: "Hemingways Nairobi",
    image: rectCenter,
  },
  {
    id: 2,
    title: "Hemingways Watamu",
    image: rectRight,
  },
  {
    id: 3,
    title: "Hemingways Ol Seki Mara",
    image: rectLeft,
  },
];

function CollectionSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const currentSlide = slides[current];
  const prevSlide = slides[(current - 1 + slides.length) % slides.length];
  const nextSlide = slides[(current + 1) % slides.length];

  return (
    <section className="bg-[#efe2cc] py-20 text-center text-slate-800">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4">
        <div className="mb-4 flex items-center justify-center">
          <img
            src={logoImage}
            alt="Hemingways mark"
            className="h-6 w-auto opacity-70"
          />
        </div>
        <h2 className="mb-12 text-2xl font-semibold tracking-[0.3em] text-slate-700 md:text-3xl">
          Discover Our Collection
        </h2>

        <div className="relative w-full max-w-4xl">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goPrev}
              disabled={isAnimating}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-[#c8c2b3] text-lg text-black transition hover:bg-[#b8b2a3] disabled:opacity-50"
            >
              ‹
            </button>

            <div className="relative w-full max-w-xl overflow-visible">
              {/* Left blurred preview */}
              <div
                className="pointer-events-none absolute inset-y-10 left-0 hidden w-full max-w-xl -translate-x-[75%] scale-95 transform overflow-hidden rounded border border-slate-300/60 bg-slate-300/40 opacity-40 blur-[1px] transition-all duration-500 ease-in-out lg:block"
                key={`prev-${prevSlide.id}`}
              >
                <img
                  src={prevSlide.image}
                  alt={prevSlide.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right blurred preview */}
              <div
                className="pointer-events-none absolute inset-y-10 right-0 hidden w-full max-w-xl translate-x-[75%] scale-95 transform overflow-hidden rounded border border-slate-300/60 bg-slate-300/40 opacity-40 blur-[1px] transition-all duration-500 ease-in-out lg:block"
                key={`next-${nextSlide.id}`}
              >
                <img
                  src={nextSlide.image}
                  alt={nextSlide.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Center main card */}
              <div
                className="relative z-20 mx-auto w-full max-w-xl rounded border border-[#284461] p-2 shadow-lg transition-all duration-500 ease-in-out"
                key={`current-${currentSlide.id}`}
              >
                <div className="relative overflow-hidden rounded border border-slate-200 bg-black/60">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="h-[360px] w-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-12 px-8 text-center text-white">
                    <p className="text-lg font-medium md:text-xl">
                      {currentSlide.title}
                    </p>
                    <button className="mt-5 inline-block border-t border-b border-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={goNext}
              disabled={isAnimating}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-[#c8c2b3] text-lg text-black transition hover:bg-[#b8b2a3] disabled:opacity-50"
            >
              ›
            </button>
          </div>

          <div className="mt-8 text-sm tracking-[0.35em] text-slate-700">
            <span className="text-xl font-semibold">
              {String(currentSlide.id).padStart(2, "0")}
            </span>
            /{String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CollectionSection);
