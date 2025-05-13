import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
