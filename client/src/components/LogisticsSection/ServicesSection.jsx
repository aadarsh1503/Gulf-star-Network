import { useState } from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaShippingFast, FaClock, FaWarehouse, FaTrain } from 'react-icons/fa';
const ServiceCard = ({ icon, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-xs p-6 bg-white rounded-3xl shadow-lg transition-transform duration-500"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flex flex-col items-center">
      <div className="p-4 rounded-xl flex items-center space-x-4">
      <div className="relative w-16 h-16">
  <span
    className={`absolute inset-0 flex items-center justify-center w-16 h-16 text-[#CDA435] mr-6 text-5xl transition-transform duration-500 ${flipped ? 'rotate-y-180 opacity-0' : 'opacity-100 bg-[#FCEFF0] rounded-lg shrink-0'}`}
  >
    {icon}
  </span>
  <span
    className={`absolute inset-0 flex items-center justify-center w-16 h-16 text-4xl transition-transform duration-500 ${flipped ? 'rotate-y-0 opacity-100 bg-[#CDA435] text-white rounded-lg' : 'rotate-y-180 opacity-0'}`}
  >
    {icon}
  </span>
</div>

  <h3 className="text-xl font-semibold ml-5">{title}</h3>
</div>
        <p className="mt-2 text-gray-600 relative left-4">{description}</p>
        <ul className="mt-4 relative  space-y-2">
      <li className="flex items-center gap-2">
        <AiOutlineCheckCircle className="text-[#CDA435] text-xl shrink-0 rounded-full bg-[#FCEFF0]" /> Quality Control System
      </li>
      <li className="flex items-center gap-2">
        <AiOutlineCheckCircle className="text-[#CDA435] text-xl shrink-0 rounded-full bg-[#FCEFF0]" /> Modern Technology
      </li>
      <li className="flex items-center gap-2">
        <AiOutlineCheckCircle className="text-[#CDA435] text-xl shrink-0 rounded-full bg-[#FCEFF0]" /> 100% True Result Provide
      </li>
    </ul>
        <button className="mt-6 px-4 py-2 text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white">
          Read More ↗
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
    const services = [
        { icon: <FaShippingFast />, title: 'Fast & Efficient Delivery', description: 'Gadipi Scing elite Aliquam vulputate tortor nec com ultra viverra.' },
        { icon: <FaClock />, title: 'Real-Time Tracking', description: 'Gadipi Scing elite Aliquam vulputate tortor nec com ultra viverra.' },
        { icon: <FaWarehouse />, title: 'Warehouse Storage', description: 'Gadipi Scing elite Aliquam vulputate tortor nec com ultra viverra.' },
        { icon: <FaTrain />, title: 'Train Freight Location', description: 'Gadipi Scing elite Aliquam vulputate tortor nec com ultra viverra.' },
      ];

  return (
    <div className='bg-[#F6F6F6] relative z-50'>
<section className="py-16 max-w-7xl mx-auto ">
  <div className="flex justify-between max-w-5xl mx-auto items-start mb-12">
    <div className="text-left">
      <h2 className="text-lg font-semibold text-yellow-600">OUR BEST SERVICES</h2>
      <h1 className="mt-2 text-3xl font-bold w-[450px] text-gray-800">
        Managing Logistics For World’s Multinational Companies
      </h1>
    </div>
    <p className="text-gray-600 mt-12 max-w-md">
      Adipiscing elit. Aliquam vulputate, tortor nec com viverra uspen disse faucibus sed dolor eget Sed id urna.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
</section>
</div>
  );
};

export default ServicesSection;
