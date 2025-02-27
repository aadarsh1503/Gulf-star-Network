import { FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import i12 from "./i12.svg"
import i3 from "./i3.svg"
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black z-50 relative text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center m">
            <img src={i12} alt="logistex" className="h-30 ml-4 relative -top-12 right-20" />
            <span className="text-xl font-bold relative top-5 right-20">logistex</span>
          </div>
          <p className="text-gray-400 mb-6">
            Lorem Ipsum Dolor Sit Amet, Consect Etur Adi Pisicing Elit Sed Do Eiusmod Tempor Incidunt Ut Labore Et
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-500"><FaXTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-yellow-500"><FaWhatsapp size={24} /></a>
            <a href="#" className="text-white hover:text-yellow-500"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-yellow-500"><FaYoutube size={24} /></a>
          </div>
          <p className="text-gray-500 mt-6">Copyright ©logistex | All Right Reserved</p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <div className="w-10 border-b-2 border-yellow-500 mb-4"></div>
          <ul className="space-y-2">
            {['Air Freight', 'Smart Warehousing', 'Train Freight', 'Ocean Fright', 'Road Freight', 'Supply Chain'].map((service) => (
              <li key={service} className="hover:text-yellow-500 cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="w-10 border-b-2 border-yellow-500 mb-4"></div>
          <ul className="space-y-2">
            {['How It’s Work', 'Partners', 'Testimonials', 'Case Studies', 'Pricing'].map((link) => (
              <li key={link} className="hover:text-yellow-500 cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <div className="w-10 border-b-2 border-yellow-500 mb-4"></div>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              Office 22, Bldg 661, Rd 1208, Block 712 - Salmabad, Kingdom Of Bahrain
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-yellow-500 mr-3" />
              +973 17491444
            </li>
            <li className="flex items-center">
              <FaClock className="text-yellow-500 mr-3" />
              Mon – Sun: 9.00 am – 8.00 pm
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
