import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Styles from '../../pages/Home.module.css';

function Reservation() {
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
    <div className="mt-24 mb-40">
      <div className={`${Styles.reserve}`}>
        <div className={`${Styles.reserve_form}`}>
          <div
            className="flex flex-col text-center mt-6 mb-8"
            data-aos="fade-up"
          >
            <h1 className="text-5xl md:text-6xl text-[#C8A97E] font-bold">
              Book a table
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold">
              Make
              {' '}
              <br />
              {' '}
              Reservation
            </h1>
          </div>
          <form
            onSubmit={sendEmail}
            ref={formRef}
            className="mx-6 md:mx-0 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 md:px-12"
          >
            <label htmlFor="name" className="flex flex-col gap-2">
              <span className="text-xl font-bold">Name</span>
              <input
                name="name"
                type="text"
                className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
                placeholder="Your Name"
                required
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="text-xl font-bold">Email</span>
              <input
                name="email"
                type="email"
                className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
                placeholder="Your Email"
                required
              />
            </label>
            <label htmlFor="phone" className="flex flex-col gap-2">
              <span className="text-xl font-bold">Phone</span>
              <input
                name="phone"
                type="tel"
                className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
                placeholder="Phone"
                required
              />
            </label>
            <label htmlFor="date" className="flex flex-col gap-2">
              <span className="text-xl font-bold">Date</span>
              <input
                name="date"
                type="date"
                className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
                placeholder="Pick a date"
                required
              />
            </label>
            <label htmlFor="time" className="flex flex-col gap-2">
              <span className="text-xl font-bold">Time</span>
              <input
                name="time"
                type="time"
                className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
                placeholder="Time"
                required
              />
            </label>
            <label htmlFor="person" className="flex flex-col gap-2">
              <span className="text-xl font-bold">Persons</span>
              <select
                name="person"
                className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5] text-base font-bold"
              >
                <option value="Service Type">No of Persons</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </label>
            <button
              type="submit"
              className="border-solid border-2 text-white border-[#C8A97E] bg-[#C8A97E] px-4 py-4 md:py-6 text-xl font-bold hover:bg-white hover:text-black "
            >
              Make Reservation
            </button>
            <div className="mt-4">
              {result && (
                <h2 className="font-bold text-base text-[#C8A97E]">
                  Thanks for making a reservation!. We&apos;ll reach out to you
                  with details of your reservation within 24 hours.
                </h2>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
