import { memo, useEffect, useRef } from "react";
import giraffeImage from "../../assets/Rectangle 460.png";
import lionImage from "../../assets/Rectangle 461.png";

function ConservationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fade-in-section bg-[#ece1cf] py-20 text-[#4b4539]"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Text Content */}
        <div className="space-y-6 lg:w-2/3">
          <h2 className="our-impact-label text-[#4A4A4A]">Our Impact</h2>

          <h2 className="our-impact-heading">
            We Put In Some <span className="italic-word">Conservation</span>{" "}
            Place Holder Text To Show You How A Filled Out Page Might Look In
            This Space
          </h2>
        </div>

        {/* Button and Images */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Button Section */}
          <div className="flex justify-start lg:w-1/3">
            <button className="inline-block border-t border-b border-[#56575C] bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition text-[#56575C">
              Learn More
            </button>
          </div>

          {/* Images Section */}
          <div className="relative flex justify-center lg:w-2/3">
            <div className="relative w-full max-w-xl">
              <img
                src={giraffeImage}
                alt="Guided safari with giraffe"
                className="h-auto w-full rounded object-cover shadow-lg"
              />
              <img
                src={lionImage}
                alt="Lioness walking in tall grass"
                className="absolute -right-4 top-[-10%] w-32 object-cover shadow-lg sm:-right-6 sm:top-[-12%] sm:w-44 lg:-right-8 lg:top-[-15%] lg:w-56"
              />
              <div className="pointer-events-none absolute -left-6 -top-10 h-24 w-24 rounded-full border border-[#d2c5af]/60 opacity-40 blur-[1px] sm:-left-8 sm:-top-12 sm:h-32 sm:w-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ConservationSection);
