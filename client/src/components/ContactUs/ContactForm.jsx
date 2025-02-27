import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-custom mb-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6">Send Us Message</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <textarea
          placeholder="Comments"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>

        <button
          type="submit"
          className="flex items-center gap-2 bg-Yellow text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300"
        >
          Send Me Message <FaArrowUpRightFromSquare />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;