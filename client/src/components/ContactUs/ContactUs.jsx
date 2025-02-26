

import ig from "./ig.jpg";
import { useNavigate } from 'react-router-dom';
import OfficeLocations from "./OfficeLocations";
import ContactForm from "./ContactForm";
import BahrainMap from "./BahrainMap";


const ContactUs = () => {
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

      <div className="relative z-10 text-white px-8 mt-16">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg ">
      <span className="text-yellow-400 cursor-pointer" onClick={() => navigate('/')}>
        Home
      </span>
      <span className="ml-2">&rarr; Contact Us</span>
      
    </p>
      </div>
    </div>
    <BahrainMap />
<OfficeLocations />
<ContactForm />
    </>
  );
};

export default ContactUs;
