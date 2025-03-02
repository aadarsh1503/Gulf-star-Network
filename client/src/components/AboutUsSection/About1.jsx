import { motion } from 'framer-motion';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import { FaCheckCircle, FaGlobe } from 'react-icons/fa';
const About1 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8">
      {/* Images Section */}
      <div className="relative w-full lg:w-1/2">
        {/* Large Image - Left Animation */}
        <motion.img
          src={i1}
          alt="Delivery Person"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-xl shadow-lg w-[450px] "
        />
        {/* Small Image - Bottom Animation */}
        <motion.img
          src={i2}
          alt="Container Ship"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute -bottom-12 lg:bottom-[-30px] left-[85px] lg:left-[230px] border-6 h-[190px] shadow-xl border-white lg:h-[256px]  w-3/4 lg:w-2/4 rounded-xl "
        />
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 w-full mt-10 relative lg:top-0 top-10 lg:mt-0">
        <h5 className="text-Yellow  font-semibold">ABOUT LOGISTICS COMPANY</h5>
        <h2 className="text-4xl font-bold mt-4">
          Reliable Logistic & Transport Solutions Saves Your Time!
        </h2>
        <p className="mt-4 text-gray-600 w-full lg:w-[550px]">
          Adipiscing Elit. Aliquam Vulputate, Tortor Nec Com Ultriviverra Suspen Disse Faucibus Sed Dolor Eget Sed Id Urna. Hiftler Group Irepresentative Loistictsi Operator Providings.
        </p>

        <div className=" lg:flex relative  justify-between items-start mt-6 ">
      {/* List Section */}
      <ul className="space-y-4">
        {[
          "Quality Control System",
          "100% Satisfaction Guarantee",
          "Professional and Qualified",
          "Safe, Reliable And Express",
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-Yellow mr-3"><FaCheckCircle /></span>
            <span className="text-gray-800 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      {/* Info Box */}
      <div className="bg-Yellow text-white relative right-0 lg:right-30 rounded-xl lg:mt-0 mt-10 p-9 bottom-4 w-fit">
        <p className="font-semibold">
          Flexible, Improved &<br /> Accelerated Solutions!
        </p>
        <h3 className="text-3xl font-bold mt-2 flex items-center gap-3">
          <FaGlobe className="text-4xl relative top-2" /> 15.9M
        </h3>
        <p className="text-sm ml-12">Clients Worldwide</p>
      </div>
    </div>
    <p className='w-full lg:w-[550px]'>Modeniscing elit. Aliquam vulputate, tortor nec com ultri viverra Suspen disse faucibus sed dolor eget Sed id urna. hiftler Group irepresentatilve loisticsti operator providings.Modeniscing elit. Aliquam vulputate, tortor nec com ultri viverra Suspen disse faucibus sed dolor eget.</p>
      </div>
    </section>
  );
};

export default About1;
