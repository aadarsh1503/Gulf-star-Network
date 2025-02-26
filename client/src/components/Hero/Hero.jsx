import { useEffect, useState } from 'react';
import i1 from './i1.png';
import i2 from './i2.webp';


const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setZoom(true);

    const interval = setInterval(() => {
      setZoom(false);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        setZoom(true);
      }, 2000); // Smooth zoom-out before switching
    }, 8000); // Total duration (4s visible + 2s transition)

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      src: i1,
      heading: 'LOGISTICS & CARGO<br>FOR PRO BUSINESS',
      text: 'When An Unknown Printer Took A Galley Of Type And Company Need Scra Make It Better Future To Make Attempt Type Specimen.'
    },
    {
      src: i2,
      heading: 'WE DELIVER YOUR<br>PRODUCT ANYWHERE',
      text: 'When An Unknown Printer Took A Galley Of Type And Company Need Scra Make It Better Future To Make Attempt Type Specimen.'
    }
  ];

  return (
    <>
    <div className="relative w-full h-[800px] -mt-[77px] overflow-hidden z-50 bg-black">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[6000ms] ease-in-out ${
            index === imageIndex && zoom ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      ))}

      <div className="relative z-10 flex items-center h-full -mt-10 px-8 sm:px-16 lg:px-10 max-w-2xl text-white">
        <div className="transition-opacity duration-2000 ease-in-out" key={imageIndex}>
          <h1
            className="text-4xl sm:text-6xl w-[700px] font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: images[imageIndex].heading }}
          />
          <p className="mt-4 text-lg w-[600px] opacity-80">{images[imageIndex].text}</p>
          <a
            href="#"
            className="inline-flex items-center mt-8 px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition duration-300"
          >
            Explore Our Services
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    
    </div>
   
    </>
  );
};

export default Hero;