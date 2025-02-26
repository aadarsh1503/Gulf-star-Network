import { FaWarehouse, FaPlane, FaShip } from 'react-icons/fa';
import i12 from "./i12.png"
const ServiceSection = () => {
  const services = [
    {
      icon: FaWarehouse,
      title: 'Warehouse',
      description: 'When an unknown printer took a galley typeat better future.'
    },
    {
      icon: FaPlane,
      title: 'Air Freight',
      description: 'When an unknown printer took a galley typeat better future.'
    },
    {
      icon: FaShip,
      title: 'Ship Cargo',
      description: 'When an unknown printer took a galley typeat better future.'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-8">
      {/* Left Section: Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-full relative left-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <service.icon className="text-yellow-600 text-4xl" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Right Section: Image Placeholder */}
      <div className="hidden lg:block ">
        <img src={i12} alt="Service" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ServiceSection;
