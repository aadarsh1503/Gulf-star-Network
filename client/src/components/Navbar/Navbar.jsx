import { FaPhoneAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope, FaClock, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from "./logo.png"
const Navbar = () => {
  return (
    <header>
      {/* Top Navbar - Black Background */}
      <div className='bg-[#151515] font-sarabun relative z-50'>
        <div className="text-[#A6A6A6] text-[15px] max-w-7xl mx-auto text-sm py-3 px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            
          <a href="mailto:info@gulfstarnetwork.com" class="flex items-center hover:text-white gap-1">
  <FaEnvelope className="text-white" /> info@gulfstarnetwork.com
</a>

            <span className="flex items-center hover:text-white gap-1">
              <FaClock className='text-white' /> Mon – Sun: 9.00 am – 8.00 pm
            </span>
          </div>
          <div className="flex items-center gap-4">
  <span>Follow Us On:</span>
  <a href="https://www.facebook.com/GulfStarNetwork" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer text-white hover:text-[#A6A6A6]" />
  </a>
  <a href="https://twitter.com/gulfstarnetwork" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="cursor-pointer text-white hover:text-[#A6A6A6]" />
  </a>
  <a href="https://www.linkedin.com/in/gulf-star-networks-a7bb4a256/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="cursor-pointer text-white hover:text-[#A6A6A6]" />
  </a>
  <a href="https://www.instagram.com/gulf_star_network/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="cursor-pointer text-white hover:text-[#A6A6A6]" />
  </a>
 
</div>

        </div>
      </div>

      {/* Bottom Navbar - Transparent Background */}
      <div className="relative z-100 font-sarabun bg-opacity-0 max-w-7xl mx-auto text-white  px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <img src={logo} className='w-[152px] h-auto z-50 relative' />
          <nav className="flex gap-8 ml-10">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/about-us" className="hover:text-yellow-400">About Us</a>
            <a href="/services" className="hover:text-yellow-400">Our Services</a>
            <a href="/team" className="hover:text-yellow-400">Team</a>
            <a href="/how-it-works" className="hover:text-yellow-400">How It Works</a>
            <a href="/pricing" className="hover:text-yellow-400">Pricing</a>
            <a href="/faq" className="hover:text-yellow-400">FAQ</a>
            <a href="/contact" className="hover:text-yellow-400">Contacts</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <div>
              <p className="text-sm">Emergency Call:</p>
              <p className="font-semibold">+973 17491444</p>
            </div>
          </div>
          <button className="bg-white text-[14px] hover:text-black text-[#CDA435] font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
            GET A QUOTE ↗
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className=" relative text-white/20 z-150 w-[1230px] mx-auto  " />
    </header>
  );
};

export default Navbar;
