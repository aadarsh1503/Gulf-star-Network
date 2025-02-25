import l1 from "./l1.png"
import l2 from "./l2.png"
import l3 from "./l3.png"
import l4 from "./l4.png"
import l5 from "./l5.png"
import l6 from "./l6.png"
const LogoSection = () => {
    return (
        <div className="bg-white z-50 py-14   relative">
      <div className="flex items-center justify-center  gap-12 max-w-7xl mx-auto py-16 ">
        <img src={l1} alt="Next Logo" className="h-12 object-contain grayscale hover:grayscale-0 cursor-pointer transition duration-300" />
        <img src={l2} alt="Express Logo" className="h-12 object-contain grayscale hover:grayscale-0 cursor-pointer transition duration-300" />
        <img src={l3} alt="Truck Delivery Logo" className="h-12 object-contain grayscale hover:grayscale-0 cursor-pointer transition duration-300" />
        <img src={l4} alt="Logistic Logo" className="h-12 object-contain grayscale hover:grayscale-0 cursor-pointer transition duration-300" />
        <img src={l5} alt="Pilot Logo" className="h-12 object-contain grayscale hover:grayscale-0 transition  cursor-pointer duration-300" />
        <img src={l6} alt="Express Tagline Logo" className="h-12 object-contain grayscale hover:grayscale-0 cursor-pointer transition duration-300" />
      </div>
      </div>
    );
  };
  
  export default LogoSection;
  