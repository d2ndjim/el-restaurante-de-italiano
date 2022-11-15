function Footer() {
  return (
    <div>
      <div>
        <h1>Feliciano</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div>
        <h1>Open Hours</h1>
        <div>
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
      <div>
        <h1>Newsletter</h1>
        <p>Far far away, behind the word mountains, far from the countries.</p>
        <form>
          <input
            name="email"
            type="email"
            className="p-4 md:px-4 md:py-5 md:m-0 border-solid border-2 border-[#E5E5E5]"
            placeholder="Your Name"
            required
          />
          <button
            type="submit"
            className="border-solid border-2 text-white border-[#C8A97E] bg-[#C8A97E] px-4 py-4 md:py-6 text-xl font-bold hover:bg-white hover:text-black "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
