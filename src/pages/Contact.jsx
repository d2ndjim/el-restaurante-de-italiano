import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

function Contact() {
  const [result, showResult] = useState(false);
  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x3upydn',
        'template_7nwl4lm',
        formRef.current,
        'e-Si7kONMKvycxzl2',
      )
      .then((result) => result.text);
    e.target.reset();
    showResult(true);
  }

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div>
      <div className="menu">
        <Header />
        <MobileNav />
        <div className="mt-80 md:mt-52 flex flex-col place-items-center gap-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold">
            Contact us
          </h1>
          <Link to="/" className="text-2xl text-white font-semibold">
            Home
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mt-20 mb-28">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold">Contact Us</h3>
        </div>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="flex flex-col gap-4 w-4/5 md:w-7/12"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <input
              name="name"
              type="text"
              placeholder="YOUR NAME*"
              required
              className="py-4 px-6 bg-[#F6F6F6] w-full md:w-1/2 outline-[#F7B72F]"
            />
            <input
              name="email"
              type="email"
              placeholder="YOUR EMAIL*"
              required
              className="py-4 px-6 bg-[#F6F6F6] w-full md:w-1/2 outline-[#F7B72F]"
            />
          </div>
          <textarea
            name="message"
            placeholder="YOUR MESSAGE*"
            rows="6"
            required
            className="p-6 bg-[#F6F6F6] outline-[#F7B72F]"
          />
          <button
            type="submit"
            className="m-auto md:text-xl font-bold text-white bg-[#C8A97E] mt-2 p-4 border-2 border-solid border-[#C8A97E] w-3/5 md:w-1/4 hover:bg-white hover:text-[#C8A97E]"
          >
            Send Message
          </button>
        </form>
        <div>
          {result && (
            <h2 className="text-base md:text-xl text-black font-bold p-4">
              Your message has been received. We&apos;ll get back to you within
              24 hours.
            </h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
