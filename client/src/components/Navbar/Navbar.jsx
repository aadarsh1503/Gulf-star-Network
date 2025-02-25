import { FaPhoneAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      {/* Top Navbar - Black Background */}
      <div className='bg-[#151515] font-sarabun relative z-50'>
      <div className="  text-[#A6A6A6]  text-[15px] max-w-7xl mx-auto text-sm py-3 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center hover:text-white gap-1">
            <FaMapMarkerAlt className='text-white ' /> 775 Rolling Green Rd
          </span>
          <span className="flex items-center hover:text-white gap-1">
            <FaEnvelope className='text-white' /> bill.sanders@example.com
          </span>
          <span className="flex items-center hover:text-white gap-1">
            <FaClock className='text-white' /> Mon – Sun: 9.00 am – 8.00 pm
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>Follow Us On:</span>
          <FaFacebookF className="cursor-pointer text-white hover:text-[#A6A6A6]" />
          <FaTwitter className="cursor-pointer text-white hover:text-[#A6A6A6]" />
          <FaWhatsapp className="cursor-pointer text-white hover:text-[#A6A6A6]" />
          <FaInstagram className="cursor-pointer text-white hover:text-[#A6A6A6]" />
          <FaYoutube className="cursor-pointer text-white hover:text-[#A6A6A6]" />
        </div>
      </div>
      </div>
      {/* Bottom Navbar - Transparent Background */}
      <div className=" relative z-100 bg-opacity-0 max-w-7xl mx-auto text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold">logistex</div>
          <nav className="flex gap-8 ml-10">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Our Services</a>
            <a href="#" className="hover:text-yellow-400">Team</a>
            <a href="#" className="hover:text-yellow-400">How It Works</a>
            <a href="#" className="hover:text-yellow-400">Pricing</a>
            <a href="#" className="hover:text-yellow-400">FAQ</a>
            <a href="#" className="hover:text-yellow-400">Contacts</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <div>
              <p className="text-sm">Emergency Call:</p>
              <p className="font-semibold">(205) 555-0100</p>
            </div>
          </div>
          <button className="bg-white text-[14px] hover:text-black text-[#CDA435] font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
            GET A QUOTE ↗
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
