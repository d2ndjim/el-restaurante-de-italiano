import { HiOutlineCake } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';
import { MdBusiness } from 'react-icons/md';

function Services() {
  return (
    <div className="my-32 bg-[#FAFAFA] flex flex-col gap-10 py-20 px-4 md:py-28 md:px-24">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl text-[#c8a97e] font-bold">
          Services
        </h1>
        <h2 className="text-4xl md:text-7xl font-bold">Catering Services</h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 py-16 px-6">
        <div
          className="flex flex-col gap-6 items-center justify-center"
          data-aos="fade-up"
        >
          <HiOutlineCake className="text-6xl text-[#C8A97E]" />
          <h3 className="text-2xl">Birthday Party</h3>
          <p className="text-center text-base leading-7 md:leading-10 md:text-xl text-[#8A8A8A]">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
            {' '}
          </p>
        </div>
        <div
          className="flex flex-col gap-4 items-center justify-center"
          data-aos="fade-up"
        >
          <MdBusiness className="text-6xl text-[#C8A97E]" />
          <h3 className="text-2xl">Birthday Party</h3>
          <p className="text-center text-base leading-7 md:leading-10 md:text-xl text-[#8A8A8A]">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
            {' '}
          </p>
        </div>
        <div
          className="flex flex-col gap-4 items-center justify-center"
          data-aos="fade-up"
        >
          <BiDish className="text-6xl text-[#C8A97E]" />
          <h3 className="text-2xl">Birthday Party</h3>
          <p className="text-center text-base leading-7 md:leading-10 md:text-xl text-[#8A8A8A]">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
            {' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
