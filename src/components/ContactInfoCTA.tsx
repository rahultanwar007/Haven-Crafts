import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

export default function ContactInfoCTA() {
  return (
<section className="w-full py-16 bg-light">
  {/* Heading with divider */}
  <div className="w-[90%] mx-auto items-center mb-8 md:mb-10 gap-4 flex">
    <div className="flex-grow h-px bg-gray-100"></div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-50 whitespace-nowrap uppercase">
      Contact Us
    </h2>
    <div className="flex-grow h-px bg-gray-100"></div>
  </div>

  {/* Contact Cards */}
  <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* WhatsApp */}
    <a href={`https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl bg-secondary backdrop-blur-md shadow-md hover:shadow-lg transition hover:scale-[1.02]">
      <FaWhatsapp className='text-4xl mb-3 text-primary' />
      <h3 className="text-lg font-bold text-primary mb-1">WhatsApp</h3>
      <p className="text-gray-50">+91 {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
    </a>
    {/* Phone */}
    <a href={`tel:+91${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="flex flex-col items-center p-6 rounded-xl bg-secondary backdrop-blur-md shadow-md hover:shadow-lg transition hover:scale-[1.02]">
      <FaPhoneAlt className='text-4xl mb-3 text-primary' />
      <h3 className="text-lg font-bold text-primary mb-1">Phone</h3>
      <p className="text-gray-50">+91 {process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
    </a>
    {/* Email */}
    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="flex flex-col items-center p-6 rounded-xl bg-secondary backdrop-blur-md shadow-md hover:shadow-lg transition hover:scale-[1.02]">
      <IoIosMail className='text-4xl mb-3 text-primary' />
      <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
      <p className="text-gray-50">{process.env.NEXT_PUBLIC_EMAIL}</p>
    </a>
  </div>
</section>

  );
}
