import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'Can I Specify A Delivery Date When Ordering?',
    answer: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'How Can I Safely Use Files?',
    answer: 'You can safely use files by ensuring they are scanned for viruses and using trusted sources only.',
  },
  {
    question: 'Where Do I Find My Office Product Key?',
    answer: 'You can find your Office product key on the email receipt or the retail card inside the product box.',
  },
  {
    question: 'What Payment Methods Are Supported?',
    answer: 'We support credit cards, PayPal, and other major payment gateways.',
  },
  {
    question: 'How Can I Track My Shipments?',
    answer: 'You can track your shipments via the tracking link provided in your confirmation email.',
  },
  {
    question: 'What options for logistics plans are available?',
    answer: 'Available Logistics Plans: Basic ($15/Month): 5000 User Activities, Unlimited Access, No Hidden Charges, 3 Updates, Figma Source. Standard ($49/Month): Includes Basic features with advanced support. Enterprise ($99/Month): Full premium access with all features and priority service.',
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Discover Frequently Asked Questions <br /> From Our Support
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span
                className={`text-lg font-semibold transition-colors duration-300 ${
                  openIndex === index ? 'text-yellow-500' : 'text-black'
                }`}
              >
                {faq.question}
              </span>
              <span className="text-yellow-500">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <div
              className={`transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
