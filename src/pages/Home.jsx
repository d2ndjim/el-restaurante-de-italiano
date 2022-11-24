import About from '../components/Home/About';
import Chef from '../components/Home/Chef';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeMenu from '../components/Home/HomeMenu';
import MobileNav from '../components/MobileNav';
import Reservation from '../components/Home/Reservation';
import Services from '../components/Home/Services';

import Styles from './Home.module.css';

function Home() {
  return (
    <div className="main">
      <div className={`${Styles.content} w-full`}>
        <Header />
        <MobileNav />
        <div className="flex flex-col justify-center my-28 lg:my-0">
          <h1
            className={`${Styles.feliciano} text-[#c09d6c] feliciano font-extrabold text-center mt-20 text-5xl mb-10`}
            data-aos="fade-up"
          >
            Feliciano
          </h1>
          <h1
            className="hidden md:block md:text-white md:text-center md:text-7xl md:font-extrabold"
            data-aos="fade-up"
          >
            BEST RESTAURANT
          </h1>
          <h1
            className="text-white text-center text-4xl font-extrabold md:hidden"
            data-aos="fade-up"
          >
            BEST
            {' '}
            <br />
            RESTAURANT
          </h1>
        </div>
      </div>
      <About />
      <Services />
      <HomeMenu />
      <Chef />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Home;
