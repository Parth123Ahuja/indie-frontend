import { useState, useEffect } from "react";

export default function Testimonials({
  autoSlide = true,
  autoSlideInterval = 8000,
  testimonials,
}) {
  const [curr, setCurr] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialsToShow(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsToShow(2);
      } else {
        setTestimonialsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalTestimonials = testimonials.length;

  // Duplicate testimonials for smooth looping
  const testimonialsExtended = [...testimonials, ...testimonials, ...testimonials];

  // Calculate the total number of slides
  const totalSlides = Math.ceil(testimonialsExtended.length / testimonialsToShow);

  // Handle previous button click
  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? totalSlides - 1 : prevCurr - 1
    );
  };

  // Handle next button click
  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === totalSlides - 1 ? 0 : prevCurr + 1
    );
  };

  // Handle dot click
  const goToSlide = (index) => {
    setCurr(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${curr * (100 / testimonialsToShow)}%)`,
          width: `${(totalSlides / (testimonialsExtended.length / testimonialsToShow)) * 100}%`,
        }}
      >
        {testimonialsExtended.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 p-1 sm:p-2 md:py-6 flex-shrink-0  shadow-md"
            style={{ minWidth: `${100 / testimonialsToShow}%` }}
          >
            <div className="relative mx-auto size-28 sm:size-30 border-pink-500 flex items-center justify-center border rounded-full">
              <img
                src={testimonial.image}
                alt={`Testimonial ${index}`}
                className="size-24 sm:size-28 object-cover rounded-full"
              />
            </div>

            <p className="text-center text-justify text-gray-700 mt-2 p-4 lg:text-xl">{testimonial.paragraph}</p>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{testimonial.heading1}</h3>
              <h3 className="text-lg font-serif">{testimonial.heading2}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="pt-4 bottom-0 w-full flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${curr === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
