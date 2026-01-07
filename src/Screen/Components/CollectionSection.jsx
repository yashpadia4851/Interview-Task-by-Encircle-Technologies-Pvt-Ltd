import { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const swiperRef = useRef(null);

  const currentSlide = slides[current];
  const prevSlide = slides[(current - 1 + slides.length) % slides.length];
  const nextSlide = slides[(current + 1) % slides.length];

  return (
    <section className="bg-[#efe2cc] py-20 text-center text-slate-800 overflow-x-hidden">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4">
        <div className="mb-4 flex items-center justify-center">
          <img
            src={logoImage}
            alt="Hemingways mark"
            className="h-6 w-auto opacity-70"
          />
        </div>
        <h2 className="mb-12 heading-discover-collection text-slate-700">
          Discover Our Collection
        </h2>

        <div className="relative w-full max-w-4xl">
          <div className="flex items-center justify-center gap-6">
            {/* Custom left navigation button */}
            <button
              type="button"
              onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-[#c8c2b3] text-lg text-black transition hover:bg-[#b8b2a3]"
            >
              ‹
            </button>

            <div className="relative w-full max-w-xl overflow-visible">
              {/* Left blurred preview */}
              <div
                className="pointer-events-none absolute inset-y-10 left-0 hidden w-full max-w-xl -translate-x-[115%] scale-95 transform overflow-hidden rounded border border-slate-300/60 bg-slate-300/40 opacity-40 blur-[1px] transition-all duration-500 ease-in-out lg:block"
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
                className="ml-4 pointer-events-none absolute inset-y-10 right-0 hidden w-full max-w-xl translate-x-[115%] scale-95 transform overflow-hidden rounded border border-slate-300/60 bg-slate-300/40 opacity-40 blur-[1px] transition-all duration-500 ease-in-out lg:block"
                key={`next-${nextSlide.id}`}
              >
                <img
                  src={nextSlide.image}
                  alt={nextSlide.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Center main Swiper card */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                pagination={{ clickable: true }}
                loop
                spaceBetween={32}
                className="relative z-20 w-full max-w-xl"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative mx-auto w-full max-w-xl rounded border border-[#284461] p-2 shadow-lg">
                      <div className="relative overflow-hidden rounded border border-slate-200 bg-black/60">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-[360px] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute inset-x-0 bottom-12 px-8 text-center text-white">
                          <p className="text-lg font-medium md:text-xl">
                            {slide.title}
                          </p>
                          <button className="mt-5 inline-block border-t border-b border-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom right navigation button */}
            <button
              type="button"
              onClick={() => swiperRef.current && swiperRef.current.slideNext()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-[#c8c2b3] text-lg text-black transition"
            >
              ›
            </button>
          </div>

          <div className="mt-8 text-slate-700">
            <span className="collection-counter">
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
