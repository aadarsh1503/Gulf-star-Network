import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "./testimonial1.png";
import testimonial2 from "./testimonial2.png";
import testimonial3 from "./testimonial3.png";
import testimonial4 from "./testimonial4.png";
import quote from "./quote.svg"
const testimonials = [
  {
    id: 1,
    name: "Ralph Edwards",
    role: "CEO, Logistex Agency",
    rating: 4,
    message:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipisc Service Follwing Arrea Fowlwo Awing Elita Florai Sum Dolor Sit Amet, Consectetur Area Raweaeaw Ecall EdBorem Ipsum Dolor Sit Amet, Consectetur.",
    image: testimonial1,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "CTO, Example Corp",
    rating: 5,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: testimonial2,
  },
  {
    id: 3,
    name: "John Smith",
    role: "Manager, Tech Solutions",
    rating: 3,
    message:
      "It has survived not only five centuries, but also the leap into electronic typesetting.",
    image: testimonial3,
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Director, Innovate Ltd",
    rating: 4,
    message:
      "Lorem Ipsum passages, and more recently with desktop publishing software.",
    image: testimonial4,
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handlePrev = () => {
    setDirection(1); // Changed from -1 to 1
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setDirection(-1); // Changed from 1 to -1
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  

  // Framer Motion Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir === 1 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir === 1 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center h-[500px] overflow-x-hidden relative z-50 justify-center p-8 bg-white">
      <div class="w-16 h-16 mb-4">
    <img src={quote} alt="Icon" class="w-full h-full object-fill" />
</div>


      <div className="flex space-x-4 mb-6">
        {testimonials.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "grayscale-0" : "grayscale"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={testimonials[activeIndex].id}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          transition={{ duration: 0.5 }}
          className="absolute top-0 mt-80 left-0  w-full flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold">{testimonials[activeIndex].name}</h2>
          <p className="text-gray-500">{testimonials[activeIndex].role}</p>

          <div className="flex my-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-yellow-400 text-xl">
                {index < testimonials[activeIndex].rating ? "★" : "☆"}
              </span>
            ))}
          </div>

          <p className="italic text-center max-w-3xl">
            &ldquo;{testimonials[activeIndex].message}&rdquo;
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between relative z-100 items-center w-full max-w-3xl mt-8">
        <button
          onClick={handlePrev}
          className="p-3 border rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="p-3 border rounded-full hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
