import { useEffect, useState } from 'react';
import cir from "./cir.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
const Middle = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => prev + 2);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full max-w-7xl font-sarabun rounded-lg overflow-hidden mx-auto relative">
      {/* Left Section */}
      <div className="flex-1 bg-[#F9F4F1] p-10 flex items-center">
        <div className="flex items-center gap-6">
          <div className="bg-[#C49A2E] text-white p-6 rounded-xl text-center">
            <h2 className="text-4xl font-bold">30</h2>
            <p className="text-sm font-bold">OF YEAR<br />Experiences</p>
          </div>
          <h1 className="text-3xl font-bold text-black leading-snug">
            Have A Wide Range Of Logistics Solution Your Next Business.
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-[#C49A2E] p-10 relative  flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-white text-2xl font-sarabun font-semibold">
          <FontAwesomeIcon icon={faFlag} className="mr-2" />Track & Trace
          </span>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            className="p-3 rounded-lg bg-[#A10000] text-white placeholder-white w-64 outline-none"
          />
          <button className="p-3 bg-white text-black rounded-lg font-semibold">
           TRACK & TRACE
          </button>
        </div>

        {/* Rotating SVG */}
        <div
          className="absolute right-10 bottom-10 w-32 h-32"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          <img src={cir} alt="Rotating Icon" />
        </div>
      </div>
    </div>
  );
};

export default Middle;
