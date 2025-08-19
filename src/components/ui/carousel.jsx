"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => frameRef.current && cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (e) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + r.width / 2);
    yRef.current = e.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (e) => {
    e.currentTarget.style.opacity = "1";
  };

  const { src, title } = slide;

  return (
    <li
      ref={slideRef}
      className="flex flex-col items-center justify-start relative text-center text-white w-[70vmin] h-[60vmin] mx-[4vmin] z-10"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      {/* gambar */}
      <div
        className="relative w-full h-[80%] bg-[#1D1F2F] rounded-[1%] overflow-hidden flex items-center justify-center transition-all duration-150 ease-out"
        style={{
          transform:
            current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
        }}
      >
        <img
          className="max-w-full max-h-full object-contain transition-opacity duration-600 ease-in-out"
          style={{ opacity: current === index ? 1 : 0.5 }}
          alt={title}
          src={src}
          onLoad={imageLoaded}
        />
        {current === index && <div className="absolute inset-0 " />}
      </div>

      {/* judul di bawah gambar */}
      <h2
        className={`mt-4 text-lg md:text-2xl lg:text-2xl transition-opacity duration-1000 ease-in-out 
          ${current === index ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {title}
      </h2>
    </li>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
        }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };
  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };
  const handleSlideClick = (index) => current !== index && setCurrent(index);

  const id = useId();

  return (
    <div
      className="relative w-[65vmin] h-[60vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl type="previous" title="Go to previous" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next" handleClick={handleNextClick} />
      </div>
    </div>
  );
}

export default Carousel;
