import { FaFacebookF, FaInstagram, FaPinterestP, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useEffect } from 'react';

const TeamSection1 = () => {
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "auto";
      document.body.style.overflowX = "auto";
    };
  }, []);

  const teamMembers = [
    {
      name: 'Riyadh Shaheen',
      position: 'Managing Director',
      image: 'https://alshaheen.pro/assets/i6-qzvvFrHi.png',
      email: 'riyadh.shaheen@gvs-bh.com'
    },
    {
      name: 'Maria Bernadeth Castro',
      position: 'Administrator',
      image: 'https://alshaheen.pro/assets/i1-BfaoyfSm.png',
      email: 'info@gvs-bh.com'
    },
    {
      name: 'Asman Rahim',
      position: 'Technology Officer',
      image: 'https://alshaheen.pro/assets/i2-FoCM2m_E.png',
      email: 'technology@gvs-bh.com'
    },
    {
      name: 'Maricris Angeles',
      position: 'Accountant',
      image: 'https://alshaheen.pro/assets/i4-C9i_LK-M.png',
      email: 'finance@gvs-bh.com'
    },
    {
      name: 'Shameemudheen Kannampurath Valappil',
      position: 'HRM Sales Executive',
      image: 'https://alshaheen.pro/assets/i3-D7bJfj_U.png',
      email: 'cs.booking@gvscargo.com'
    },
    {
      name: 'Rohit Isaac George',
      position: 'Sales Executive',
      image: 'https://gvs-bh-it-q994.vercel.app/images/logo/i132.jpg',
      email: 'sales@gvs-bh.com'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 bg-cover text-center shadow-custom py-16 hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-44 h-52 mx-auto rounded-full mb-4 object-cover"
          />
          <div className="border-t-4 border-[#CDA435] w-8 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-gray-500 mb-1">{member.position}</p>
          {/* <p className="text-sm text-blue-500 mb-4">{member.email}</p> */}
          <div className="flex justify-center space-x-4 text-gray-600">
            <a href={`mailto:${member.email}`} className="hover:text-black"><FaEnvelope /></a>
            {/* <a href="#" className="hover:text-black"><FaFacebookF /></a>
            <a href="#" className="hover:text-black"><FaXTwitter /></a>
            <a href="#" className="hover:text-black"><FaInstagram /></a>
            <a href="#" className="hover:text-black"><FaPinterestP /></a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection1;
