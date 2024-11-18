// components/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <section className="p-16 max-w-3xl mx-auto text-center font-sans animate-fadeInUp">
      <h2 className="text-4xl text-gray-800 mb-8">Get in Touch</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-12">
        If you’d like to discuss a project or just want to say hello, feel free to get in touch!
        I’ll try my best to get back to you as soon as possible.
      </p>

      <form className="s: flex flex-col gap-6">
        <input className='p-4 border border-gray-300 rounded-lg text-lg w-full focus:border-pink-500 focus:outline-none' type="text" name="name" placeholder="Your Name" required />
        <input className='p-4 border border-gray-300 rounded-lg text-lg w-full focus:border-pink-500 focus:outline-none' type="email" name="email" placeholder="Your Email" required />
        <textarea className='p-4 border border-gray-300 rounded-lg text-lg w-full focus:border-pink-500 focus:outline-none' name="message" placeholder="Your Message" required></textarea>
        <button className='p-4 text-lg text-white bg-gradient-to-br from-pink-500 to-orange-300 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-orange-300' type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;