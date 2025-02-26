import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import i1 from "./i1.png"
import i2 from "./i2.png"
import i3 from "./i3.png"
import i4 from "./i4.png"
import i5 from "./i5.png"
import i6 from "./i6.png"
import i7 from "./i7.png"
import i8 from "./i8.png"
const TeamSection1 = () => {
  const teamMembers = [
    {
      name: 'Kristin Watson',
      position: 'Investment Department',
      image: i1,
    },
    {
      name: 'Guy Hawkins',
      position: 'Investment Department',
      image: i2,
    },
    {
      name: 'Wade Warren',
      position: 'Investment Department',
      image: i3,
    },
    {
      name: 'Jenny Wilson',
      position: 'Investment Department',
      image: i4,
    },
    {
      name: 'Kristin Watson',
      position: 'Investment Department',
      image: i1,
    },
    {
      name: 'Guy Hawkins',
      position: 'Investment Department',
      image: i2,
    },
    {
      name: 'Wade Warren',
      position: 'Investment Department',
      image: i3,
    },
    {
      name: 'Jenny Wilson',
      position: 'Investment Department',
      image: i4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 text-center shadow-custom py-16 hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-44 h-44 mx-auto rounded-full mb-4"
          />
          <div className="border-t-4 border-[#CDA435] w-8 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-gray-500 mb-4">{member.position}</p>
          <div className="flex justify-center space-x-4 text-gray-600">
            <a href="#" className="hover:text-black"><FaFacebookF /></a>
            <a href="#" className="hover:text-black"><FaXTwitter /></a>
            <a href="#" className="hover:text-black"><FaInstagram /></a>
            <a href="#" className="hover:text-black"><FaPinterestP /></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection1;
