import React from "react";

const BahrainMap = () => {
  return (
    <div className="w-full max-w-7xl mt-20 mb-10 mx-auto h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Bahrain Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24000!2d50.5005!3d26.1905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.5!3m3!1m2!1s0x3e49a82a6e8f07ed%3A0x3c0c4f7a9a0a6b6b!2sIsa%20Town%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1695721234567!5m2!1sen!2sbh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default BahrainMap;
