import { FaShip, FaTruck, FaPlane, FaWarehouse, FaTrain, FaHome } from 'react-icons/fa';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"
import i6 from "./i6.jpg"
const FreightCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Ocean Freight',
      description: 'Road transpo arer tation cruicial follw roley Logistins coordinated trans portan the countries destination.',
      icon: <FaShip className="text-white text-5xl" />,
      image: i1
    },
    {
      id: 2,
      title: 'Road Freight',
      description: 'Road transpo arer tation cruicial follw roley Logistins coordinated trans portan the countries destination.',
      icon: <FaTruck className="text-white text-5xl" />,
      image: i2
    },
    {
      id: 3,
      title: 'Air Freight',
      description: 'Road transpo arer tation cruicial follw roley Logistins coordinated trans portan the countries destination.',
      icon: <FaPlane className="text-white text-5xl" />,
      image: i3
    },
    {
        id: 4,
        title: 'Train Freight',
        description: 'Road transportation is crucial, following key logistics and coordinating transportation to the country’s destination.',
        icon: <FaTrain className="text-white text-5xl" />,
        image: i4
      },
      {
        id: 5,
        title: 'Modern Storage',
        description: 'Road transportation is crucial, following key logistics and coordinating transportation to the country’s destination.',
        icon: <FaWarehouse className="text-white text-5xl" />,
        image: i5
      },
      {
        id: 6,
        title: 'House Shifting',
        description: 'Road transportation is crucial, following key logistics and coordinating transportation to the country’s destination.',
        icon: <FaHome className="text-white text-5xl" />,
        image: i6
      },
      
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 font-sarabun gap-8 p-8 bg-gray-100">
      {cards.map((card) => (
        <div key={card.id} className="bg-white rounded-2xl shadow-lg  ">
          <div className="relative group ">
            <img src={card.image} alt={card.title} className="w-full h-64 p-4 rounded-[20px] object-cover transition-transform duration-500 group-hover:brightness-50" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="text-white bg-black bg-opacity-70 px-4 py-2 bottom-18 relative rounded-lg">Read More</button>
            </div>
          
          <div className="p-6 text-center">
            <div className="inline-block bg-Yellow p-4 outline-white outline-5 shrink-0 rounded-lg relative z-20 bottom-3 text-[20px] -mt-32">{card.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.description}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default FreightCards;
