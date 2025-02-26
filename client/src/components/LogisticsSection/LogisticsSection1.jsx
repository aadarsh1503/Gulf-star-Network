import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaPlaneDeparture, FaTruck } from 'react-icons/fa';
import jcb from "./jcb.svg"
import i5 from "./i5.svg"
import i16 from "./i16.webp"
export default function LogisticsSection1() {
  return (
    <section className="bg-white relative overflow-x-hidden z-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-6 lg:px-12 relative">

        {/* Left Side - Image with Logo Overlay */}
        <div className="relative">
          <img
            src={i16}
            alt="Container Ship"
            className="rounded-xl shadow-lg w-[450px]"
          />
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white px-6 py-12 rounded-lg ">
            <img
              src={i5}
              alt="Logistra Logo"
              className="h-56"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h4 className="text-sm text-[#D4A437] font-semibold uppercase mb-4">Why Choose Us</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Delivering The Best Global Logistics Solutions.
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many variations of passages of Lorem Ipsum available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div className="flex items-start">
    <FaPlaneDeparture className="text-[#D4A437] w-20 h-20 rounded-lg outline p-2 hover:bg-[#D4A437] hover:text-white outline-[#D4A437] shrink-0 mr-4" />
    <div>
      <h3 className="font-semibold text-lg mb-1">Worldwide Services</h3>
      <p className="text-gray-600">Finance helps you convert into a strategic dear.</p>
    </div>
  </div>

  <div className="flex items-start">
    <FaTruck className="text-[#D4A437] w-20 h-20 outline p-2 rounded-lg hover:bg-[#D4A437] hover:text-white outline-[#D4A437] shrink-0 mr-4" />
    <div>
      <h3 className="font-semibold text-lg mb-1">Delivered Safely</h3>
      <p className="text-gray-600">Finance helps you to convert into a strategic asset get.</p>
    </div>
  </div>
</div>


          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-800">
            <AiOutlineCheckCircle className="text-[#CDA435] text-xl shrink-0 rounded-full bg-[#FCEFF0] mr-2" /> Quality Control System
            </li>
            <li className="flex items-center text-gray-800">
            <AiOutlineCheckCircle className="text-[#CDA435] text-xl shrink-0 rounded-full bg-[#FCEFF0] mr-2" /> Modern Technology
            </li>
            <li className="flex items-center text-gray-800">
            <AiOutlineCheckCircle className="text-[#CDA435] text-xl shrink-0 rounded-full bg-[#FCEFF0] mr-2" /> 100% True Result Provide
            </li>
          </ul>

          <button className="bg-[#D4A437] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#B68A2B] transition duration-300">
            Request A Quote →
          </button>
        </div>
<p className='absolute bottom-28 -right-5 hidden lg:block w-96'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br />There are many variations</p>
        {/* JCB Image - Bottom Right */}
        <img
          src={jcb}
          alt="JCB Machinery"
          className="absolute -bottom-5 -right-10 hidden lg:block w-44"
        />
      </div>
    </section>
  );
}
