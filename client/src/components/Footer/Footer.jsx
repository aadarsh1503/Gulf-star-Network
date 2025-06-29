import { FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaFacebook, FaLinkedin } from "react-icons/fa";
import i12 from "./i12.svg"
import logo from "./logo.png"
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black z-50 relative text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap- px-6">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center ">
            <img src={i12} alt="logistex" className="h-30 ml-4 relative -top-12 right-20" />
            <span className="relative top-5 right-32">
  <img src={logo} alt="Logistex Logo" className="w-[200px] max-w-none" />
</span>

          </div>
          <p className="text-gray-400 mb-6">
          We provide fast, reliable logistics and transport solutions designed to save you time and ensure seamless delivery. Trust us for efficient and on-time services.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com/gulfstarnetwork" className="text-white hover:text-yellow-500" target="_blank"><FaXTwitter size={24} /></a>
            <a href="https://www.facebook.com/GulfStarNetwork" className="text-white hover:text-yellow-500" target="_blank"><FaFacebook size={24} /></a>
            <a href="https://www.instagram.com/gulf_star_network/" className="text-white hover:text-yellow-500" target="_blank"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/gulf-star-networks-a7bb4a256/" className="text-white hover:text-yellow-500" target="_blank"><FaLinkedin size={24} /></a>
          </div>
          <p className="text-gray-500 mt-6">Copyright ©Gulf Star Network | All Right Reserved</p>
        </div>

        {/* Our Services */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <div className="w-10 border-b-2 border-yellow-500 mb-4"></div>
          <ul className="space-y-2">
            {['Air Freight', 'Smart Warehousing', 'Train Freight', 'Ocean Fright', 'Road Freight', 'Supply Chain'].map((service) => (
              <li key={service} className="hover:text-yellow-500 ">{service}</li>
            ))}
          </ul>
        </div> */}

        {/* Quick Links */}
        <div className="ml-20">
  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
  <div className="w-10 border-b-2 border-yellow-500 mb-4"></div>
  <ul className="space-y-2">
    {[
      { name: 'About us', url: '/about-us' },
      { name: 'How It’s Work', url: '/how-it-works' },
      { name: 'Our Services', url: '/services' },
      { name: 'Team', url: '/team' },
      { name: 'Faq', url: '/faq' },
      { name: 'Pricing', url: '/pricing' },
      { name: 'Contact', url: '/contact' },
    ].map((link) => (
      <li key={link.name}>
        <a
          href={link.url}
          
          
          className="hover:text-yellow-500 cursor-pointer"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>


        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <div className="w-10 border-b-2 border-yellow-500 mb-4"></div>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-3 shrink-0" />
              Office 22, Bldg 661, Rd 1208, Block 712 - Salmabad, Kingdom Of Bahrain
            </li>
            <li className="flex items-center">
  <FaPhoneAlt className="text-yellow-500 mr-3" />
  <a href="tel:+97317491444" className="hover:underline">+973 17491444</a>
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
