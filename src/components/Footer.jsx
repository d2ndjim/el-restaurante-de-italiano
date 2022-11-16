import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Socials from './Socials';

function Footer() {
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
    <div className="flex flex-col py-16 px-6 md:grid md:grid-cols-3 gap-8 md:gap-6 md:p-32 bg-black">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-white">Feliciano</h1>
        <p className="md:pr-16 text-xl leading-8 md:leading-10 text-[#B4B6B9]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <Socials />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-white">Open Hours</h1>
        <div className="grid grid-cols-2 text-xl gap-y-4 text-[#B4B6B9]">
          <p>Monday</p>
          <p>9:00 - 24:00</p>
          <p>Tuesday</p>
          <p>9:00 - 24:00</p>
          <p>Wednesday</p>
          <p>9:00 - 24:00</p>
          <p>Thursday</p>
          <p>9:00 - 24:00</p>
          <p>Friday</p>
          <p>9:00 - 02:00</p>
          <p>Saturday</p>
          <p>9:00 - 02:00</p>
          <p>Sunday</p>
          <p>9:00 - 02:00</p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-white">Newsletter</h1>
        <p className="pr-16 text-xl leading-10 text-[#B4B6B9]">
          Far far away, behind the word mountains, far from the countries.
        </p>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="flex flex-col gap-3"
        >
          <input
            name="email"
            type="email"
            className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
            placeholder="Enter Email Address"
            required
          />
          <button
            type="submit"
            className="border-solid border-2 text-white border-[#C8A97E] bg-[#C8A97E] px-4 py-4 md:py-4 text-xl font-bold hover:bg-white hover:text-black "
          >
            Subscribe
          </button>
          <div className="mt-4">
            {result && (
              <h2 className="font-bold text-base text-[#C8A97E]">
                Thanks for subscribing to our newsletter!!!
              </h2>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
