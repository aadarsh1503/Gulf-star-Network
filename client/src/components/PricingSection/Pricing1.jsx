import { FaCheck } from 'react-icons/fa';

const Pricing1 = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$15',
      features: [
        '5000 User Activities',
        'Unlimited Access',
        'No Hidden Charge',
        '03 Time Updates',
        'Figma Source File',
      ],
    },
    {
      title: 'Standard Plan',
      price: '$49',
      features: [
        '5000 User Activities',
        'Unlimited Access',
        'No Hidden Charge',
        '03 Time Updates',
        'Figma Source File',
      ],
    },
    {
      title: 'Enterprise Plan',
      price: '$99',
      features: [
        '5000 User Activities',
        'Unlimited Access',
        'No Hidden Charge',
        '03 Time Updates',
        'Figma Source File',
      ],
    },
  ];

  return (
    <div className='bg-gray-100 font-sarabun'>
    <div className="py-12 flex justify-center max-w-5xl mx-auto items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-5xl font-bold mb-2">{plan.price}</p>
            <span className="text-gray-600 text-lg">/ Month</span>
            <p className="text-gray-500 mt-4 mb-6">
              Dorem ipsum dolor sit amet consect
              adipisicing elied do eiusmod
            </p>
            <ul className="space-y-3 mb-8 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <FaCheck className="text-Yellow" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-Yellow text-white py-3 px-6 rounded-full font-semibold hover:bg-yellow-700 transition-colors duration-300">
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Pricing1;
