import { FaPhoneAlt, FaFacebookF, FaTwitter, FaWhatsapp,FaHome, FaCogs, FaPhone, FaInfoCircle, FaBars, FaTimes, FaInstagram, FaYoutube, FaEnvelope, FaClock, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from "./logo.png"
import { useState } from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      {/* Top Navbar - Black Background */}
      <div className='bg-[#151515] font-sarabun relative z-130'>
        <div className="text-[#A6A6A6] text-[15px] max-w-7xl mx-auto text-sm py-3 px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            
          <a href="mailto:info@gulfstarnetwork.com" class="flex items-center hover:text-white gap-1">
  <FaEnvelope className="text-white" /> info@gulfstarnetwork.com
</a>

            <span className="flex items-center lg:flex hidden hover:text-white gap-1">
              <FaClock className='text-white  ' /> Mon – Sun: 9.00 am – 8.00 pm
            </span>
          </div>
          <div className="flex items-center gap-4">
  <span className='lg:flex hidden'>Follow Us On:</span>
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

      {/* Bottom Navbar - Transparent Background (Large Screens) */}
      <div className="relative z-100 font-sarabun bg-opacity-0 max-w-7xl mx-auto text-white px-6 flex justify-between items-center hidden lg:flex">
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

      {/* Bottom Navbar (Mobile Screens) */}
      <div>
      {/* Mobile Navbar */}
      <div className="bottom-0 left-0 right-0 z-120 relative text-black shadow-md flex justify-between items-center p-3 lg:hidden">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </a>

        {/* Hamburger Icon */}
        <button onClick={() => setIsMenuOpen(true)} className="text-2xl text-white z-150 relative">
          <FaBars />
        </button>
      </div>

      {/* Sliding Menu */}
      <div className={`fixed top-0 left-0 w-2/3 h-full z-160 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-2xl">
          <FaTimes />
        </button>
        <div className="flex flex-col mt-16 space-y-6 pl-8">
          <a href="/" className="flex items-center text-lg">
            <FaHome className="mr-3" /> Home
          </a>
          <a href="/services" className="flex items-center text-lg">
            <FaCogs className="mr-3" /> Services
          </a>
          <a href="/contact" className="flex items-center text-lg">
            <FaPhone className="mr-3" /> Contact
          </a>
          <a href="/about-us" className="flex items-center text-lg">
            <FaInfoCircle className="mr-3" /> About
          </a>
        </div>
      </div>
    </div>


      {/* Horizontal Line */}
      <hr className=" relative text-white/20 z-150 w-[1230px] mx-auto  " />
    </header>
  );
};

export default Navbar;
