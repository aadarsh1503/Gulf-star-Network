import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import i15 from "./i15.webp";

const FixedImageSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoOpen = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Fixed Background Section */}
      <div className="fixed inset-0 z-0">
        <img src={i15} alt="Warehouse" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center h-[100vh] bg-gradient-to-r from-black/60 to-transparent text-white">
        <div className="ml-12 max-w-xl">
          <p className="text-sm uppercase mb-4">Customer Teams & An Agile Services</p>
          <h1 className="text-5xl font-bold leading-tight">
            We Provide The Best And Fastest Courier Services Nowadays
          </h1>
        </div>

        {/* Play Button with Wave Animation */}
        <button
          onClick={handleVideoOpen}
          className="absolute right-48 flex items-center justify-center w-20 h-20 rounded-full bg-white cursor-pointer hover:bg-white/30 transition-all animate-pulse"
        >
          <span className="absolute inline-block w-32 h-32 rounded-full border-4 border-yellow-500 animate-[ping_2s_infinite]" />
          <FaPlay className="text-yellow-500 text-3xl relative z-10" />
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="600"
              src="https://youtu.be/1iIZeIy7TqM?si=LEqFRr3UvSxSI4oq"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Scrollable Content Below */}
      <div className="relative z-20 bg-white p-12">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We specialize in providing reliable and fast courier services. Our team ensures your packages are delivered on time with the highest level of care.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Explore our wide range of services and discover how we can assist you in achieving seamless logistics solutions.
        </p>
      </div>
    </div>
  );
};

export default FixedImageSection;