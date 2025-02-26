import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import i17 from "./i17.webp"
import test1 from "./test1.png"
import team2 from "./team2.png"
import team3 from "./team3.png"
import team5 from "./team5.jpg"
const teamMembers = [
  {
    name: "Kristin Watson",
    position: "Investment Department",
    image: team2,
  },
  {
    name: "Guy Hawkins",
    position: "Investment Department",
    image: test1,
  },
  {
    name: "Wade Warren",
    position: "Investment Department",
    image: team3,
  },
  {
    name: "Jenny Wilson",
    position: "Investment Department",
    image: team5,
  },
];

export default function TeamSection() {
  return (
    <div className="bg-[#F9F9F9] relative-z-50">
   
  <section className="bg-[#F9F9F9] relative z-100   py-[60px]">
  <section className=" bottom-[220px] relative z-50 py-8  flex justify-center">
    <div className="bg-[#F9F9F9] rounded-2xl shadow-lg flex max-w-6xl w-full grid grid-cols-3 overflow-hidden">
      <img
        src={i17}
        alt="Transport Services"
        className="object-cover w-full h-[250px]"
      />
      <div className="p-8 flex flex-col relative left-10 justify-center">
        <h2 className="text-3xl font-bold w-[440px] text-gray-800 mb-4">
          Would you Like to get The Best Transport Services?
        </h2>
        <p className="text-gray-600 w-[500px]">
          Dapibus interdum senectus malesuada est nec morbi cursus.
        </p>
      </div>
      <div className="flex items-center justify-center relative left-20 p-8">
        <a
          href="#"
          className="inline-flex items-center bg-black text-[#F9F9F9] px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Read More ↗
        </a>
      </div>
    </div>
  </section>
  <div className="max-w-7xl mx-auto px-6 relative text-center">

  <div class="flex justify-between -mt-32 mb-10 items-start">
  <div class="max-w-xl">
    <h3 class="text-yellow-600 text-left font-semibold uppercase">Expert Team</h3>
    <h2 class="text-4xl font-bold text-gray-900 mb-6">Meet Our Executive People</h2>
  </div>

  <p class="text-gray-500 max-w-lg text-left">
    Adipiscing elit. Aliquam vulputate, tortor nec conviverra uspen disse faucibus sed dolor eget Sed id urna.
  </p>
</div>

 
<div className="relative bg-[#F9F9F9]  z-50">

  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="relative w-[289px] h-[390px] bg-white rounded-3xl shadow-custom overflow-hidden group"
      >
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-[230px] relative ml-18 mt-16 h-full transition-all duration-500 filter grayscale group-hover:grayscale-0"
          />

          <div className="absolute -top-14 left-8 text-left">
            <h4 className="text-2xl font-semibold text-gray-900">{member.name}</h4>
            <p className="text-gray-500 text-sm">{member.position}</p>
          </div>

          <div className="absolute left-8 bottom-8 flex flex-col gap-4 items-center">
            <div className="w-[3px] h-32 bottom-4 relative bg-[#CDA435]"></div>
            <FaFacebookF className="text-gray-400 hover:text-blue-600 cursor-pointer" />
            <FaPinterestP className="text-gray-400 hover:text-red-600 cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="text-gray-400 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  </div>
</section>
    </div>
  );
} 
