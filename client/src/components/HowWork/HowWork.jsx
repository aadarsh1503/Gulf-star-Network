import { AiOutlineInbox, AiOutlinePhone, AiOutlineGlobal, AiOutlineFileDone } from 'react-icons/ai';
import i1 from "./i1.svg";
import iarr2 from "./iarr2.svg";
import i13 from "./i13.jpg"

const HowWork = () => {
  const steps = [
    {
      id: '01',
      icon: <AiOutlineInbox size={50} className="hover:animate-spin-x" />,
      title: 'Request A Quote',
      description: 'There are many variation sear passages orem',
      arrow: i1,
    },
    {
      id: '02',
      icon: <AiOutlinePhone size={50} className="hover:animate-spin-x" />,
      title: 'Call Back From Office',
      description: 'There are many variation sear passages orem',
      arrow: iarr2
    },
    {
      id: '03',
      icon: <AiOutlineGlobal size={50} className="hover:animate-spin-x" />,
      title: 'Delivery Available',
      description: 'There are many variation sear passages orem',
      arrow: i1
    },
    {
      id: '04',
      icon: <AiOutlineFileDone size={50} className="hover:animate-spin-x" />,
      title: 'Deliver Shipping',
      description: 'There are many variation sear passages orem'
    },
  ];

  return (
    <div>
    <section className="bg-white relative z-50 h-[1400px] lg:h-screen text-white py-16">
      <style>{`
        @keyframes spinX {
          0% { transform: rotate3d(1, 0, 0, 0deg); }
          100% { transform: rotate3d(1, 0, 0, 360deg); }
        }

        .hover\:animate-spin-x:hover {
          animation: spinX 0.7s ease;
        }
      `}</style>
      <div className="text-center mb-12 mt-12">
        <h3 className="text-sm uppercase text-Yellow tracking-wide">How It Works</h3>
        <h2 className="text-4xl font-bold text-black mt-2">How We Operate Unveiling<br /> Our Logistics Process</h2>
      </div>
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center text-center relative">
            <div className="relative bg-Yellow rounded-lg p-6 shrink-0 text-white shadow-lg">
              {step.icon}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full px-3 py-1 text-sm font-bold">
                {step.id}
              </div>
            </div>
            <h3 className="mt-6 text-xl text-black font-semibold">{step.title}</h3>
            <p className="mt-2 text-black font-sarabun text-[17px] w-56">{step.description}</p>
            {index < steps.length - 1 && (
              <img src={step.arrow} alt="arrow" className="absolute top-1/3 lg:flex hidden right-[-70px] transform -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
      </section>
      
    
    </div>
  );
};

export default HowWork;
