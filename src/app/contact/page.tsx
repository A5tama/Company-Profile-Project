// pages/contact.tsx

import Head from 'next/head';
import { FaPhone, FaEnvelope, FaSnapchat } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>Contact Us - MANNA Herbal Skincare Products</title>
      </Head>
      <div className="flex justify-center mb-8">
        <img src="/logo4.png" alt="MANNA Logo" className="w-auto h-24" />
      </div>
      <h1 className="text-4xl font-serif font-semibold text-center py-3">Contact Us</h1>
      <p className="text-lg mb-8 text-center">Hi! How can we help?</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <FaPhone className="text-5xl text-blue-500 mb-2" />
          <p className="text-lg">Call Us</p>
          <p className="text-sm text-gray-600">123-456-7890</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-5xl text-blue-500 mb-2" />
          <p className="text-lg">Email Us</p>
          <p className="text-sm text-gray-600">support@mannaskincare.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaSnapchat className="text-5xl text-blue-500 mb-2" />
          <p className="text-lg">Snap Chat</p>
          <p className="text-sm text-gray-600">Chat with us online</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
