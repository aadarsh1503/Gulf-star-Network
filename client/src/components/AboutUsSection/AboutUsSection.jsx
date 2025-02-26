import About1 from "./About1";
import ig from "./ig.jpg";
import ServiceSection1 from "./ServiceSection1";
import { useNavigate } from 'react-router-dom';

const AboutUsSection = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="relative w-full h-[200px] -mt-[77px] flex items-center">
      {/* Background Image with Filter */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ig})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(40%)"
        }}
      ></div>

      <div className="relative z-10 text-white mt-16 px-8">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg ">
      <span className="text-yellow-400 cursor-pointer" onClick={() => navigate('/')}>
        Home
      </span>
      <span className="ml-2">&rarr; About Us</span>
      
    </p>
      </div>
    </div>
    <About1 />
    <ServiceSection1 />
    </>
  );
};

export default AboutUsSection;
