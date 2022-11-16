import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

function Socials() {
  return (
    <div className="flex gap-10">
      <a
        className="pr-5"
        href="https://www.instagram.com/i_am_d2ndjim/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Insta Page"
        data-aos="fade-up"
      >
        <FiInstagram className="text-white text-xl md:text-3xl hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        className="pr-5"
        href="https://www.linkedin.com/in/lekanj/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Linkedin profile"
        data-aos="fade-up"
      >
        <FiLinkedin className="text-white text-xl md:text-3xl hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://twitter.com/d2ndjim_"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Twitter profile"
        data-aos="fade-up"
      >
        <FiTwitter className="text-white text-xl font-bold md:text-3xl hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
    </div>
  );
}

export default Socials;
