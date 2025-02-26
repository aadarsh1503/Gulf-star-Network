import { FaPhone } from 'react-icons/fa';

const offices = [
  {
    city: 'Bahrain',
    address: 'Office 22, Bldg 661, Rd 1208, Block 712 - Salmabad, Kingdom Of Bahrain',
    phone: '+973 17491444',
    hours: 'Monday – Friday: 9:00-20:00\nSaturday: 11:00 – 15:00',
    email:"customercare@gvscargo.com"
  },
  {
    city: 'UAE',
    address: '221 Salah Al Din St - Deira - Dubai - United Arab Emirates',
    phone: '+971 45284037',
    hours: 'Monday – Friday: 9:00-20:00\nSaturday: 11:00 – 15:00',
    email: 'customercare@gvscargo.com'
  },
];

export default function OfficeLocations() {
  return (
    <div className="flex justify-center items-center min-h- p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center font-sarabun">
        {offices.map((office, index) => (
          <div key={index} className="text-gray-800">
            <h2 className="text-[30px] font-semibold mb-4">Office In {office.city}</h2>
            <p className="mb-4 w-72 mx-auto text-lg">{office.address}</p>
            <div className="flex justify-center items-center gap-2 font-bold text-lg mb-4">
              <FaPhone className="text-gray-600" />
              {office.phone}
            </div>
            <p className="whitespace-pre-line mb-4">{office.hours}</p>
            <p>{office.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}