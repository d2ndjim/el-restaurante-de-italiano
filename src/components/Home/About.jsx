import about from '../../assets/images/about.jpg';
import about2 from '../../assets/images/about2.jpg';

function About() {
  return (
    <div className="my-24 flex flex-col gap-y-12 md:px-14  md:grid md:grid-cols-2 md:gap-x-8">
      <div
        className="flex mx-2 md:mx-0 items-center justify-center md:gap-6"
        data-aos="fade-right"
      >
        <img src={about} alt={about} className="abt" />
        <img src={about2} alt={about2} className="abt md:mt-14" />
      </div>
      <div className="mx-4" data-aos="fade-left">
        <div className="flex flex-col">
          <h1 className="text-7xl md:text-9xl text-[#c8a97e]">about</h1>
          <h1 className="text-5xl md:text-7xl mb-8 font-bold">
            Feliciano
            {' '}
            <br />
            {' '}
            Restaurant
          </h1>
        </div>
        <p className="leading-9 md:leading-10 text-xl md:text-2xl text-[#7A7A7A]">
          A small river named Duden flows by the place and supplies it with the
          necessary regelialia. It is a paradisematic country, in which roasted
          parts of sentences fly into your mouth.
        </p>
        <p className="mt-6 text-xl md:text-2xl text-[#7A7A7A] mb-2">
          Mon - Fri
          {' '}
          <b>8 AM - 11PM</b>
        </p>
        <h3 className="text-2xl md:text-4xl text-[#c8a97e] font-bold">
          +234-909-876-0067
        </h3>
      </div>
    </div>
  );
}

export default About;
