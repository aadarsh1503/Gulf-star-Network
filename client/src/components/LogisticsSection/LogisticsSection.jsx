import { motion } from 'framer-motion';
import { FaBox, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import ServicesSection from './ServicesSection';
import FixedImageSection from './FixedImageSection';
import LogisticsSection1 from './LogisticsSection1';
import LogisticsProcess from './LogisticsProcess';
import TeamSection from './TeamSection';
import TestimonialSlider from './TestimonialSlider';
import LogoSection from './LogoSection';
import Hero from '../Hero/Hero';
import Middle from './Middle';
import i1 from "./i1.webp"
import i2 from "./i2.webp"
import i3 from "./i3.webp"
import Slide1 from '../Slide1/Slide1';
import Slide from '../Slide/Slide';

const LogisticsSection = () => {
  return (
    <>
    <Hero />
  
    <div className="flex flex-col relative z-50  gap-12 p-8 bg-white">
  {/* Middle Component - Top Section */}
  <div className="w-full relative bottom-32 rounded-lg z-100 flex justify-center">
    <Middle />
  </div>

  {/* Bottom Section - Left and Right Sections */}
  <div className="grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden overflow-y-hidden items-center gap-12">
    {/* Left Side - Image Section */}
    <div className="relative flex justify-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        className="relative w-full max-w-lg"
      >
        <div className="absolute inset-0 w-72 h-80 bg-pink-100 rounded-lg -z-10"></div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <img
            src={i1}
            alt="Shipping Containers"
            className="rounded-lg w-full shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-6 -right-12"
        >
          <img
            src={i3}
            alt="Worker Handling Package"
            className="w-[250px] h-48 border-white border-6 rounded-lg shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className="absolute top-12 -right-20"
        >
          <img
            src={i2}
            alt="Port Cranes"
            className="border-white border-6 shadow-2xl w-56 h-56 rounded-lg"
          />
        </motion.div>
      </motion.div>
    </div>

    {/* Right Side - Content Section */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <p className="text-yellow-600 font-semibold">RELIABLE LOGISTIC & TRANSPORT SOLUTIONS</p>
      <h2 className="text-[36px] font-bold w-[550px] leading-snug text-gray-900">
        Reliable & Express Logistic & Transport Solutions That Saves Your Time!
      </h2>
      <p className="text-gray-600 w-[550px] leading-relaxed">
        Adipiscing elit. Aliquam vulputate, tortor nec com ultri viverra
        Suspen disse faucibus sed dolor eget Sed id urna. hiftler Group
        ireprestantative logisticsti operator providings.
      </p>

      <div className="grid grid-cols-2 mx-auto gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaBox className="text-yellow-600 text-[46px]" />
            <div>
              <h3 className="text-3xl font-bold">9.5M</h3>
              <p className="text-gray-600">Delivered Goods</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaGlobe className="text-yellow-600 text-[46px]" />
            <div>
              <h3 className="text-3xl font-bold">15.9M</h3>
              <p className="text-gray-600">Clients Worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <ul className="space-y-4 relative right-10">
          {[
            'Quality Control System',
            '100% Satisfaction Guarantee',
            'Professional and Qualified',
            'Safe, Reliable And Express',
          ].map((item, index) => (
            <li key={index} className="flex text-lg items-center gap-3 text-black">
              <FaCheckCircle className="text-yellow-600 text-xl shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-yellow-600 text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-yellow-700 transition">
        Explore Our Services <span>&#8594;</span>
      </button>
    </motion.div>
  </div>
</div>
    <ServicesSection />
    <FixedImageSection />
    <LogisticsSection1 />
    <LogisticsProcess />
    <TeamSection />
    <TestimonialSlider />
    <Slide />
    </>
  );
};

export default LogisticsSection;
