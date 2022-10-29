import About from '../components/About';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Services from '../components/Services';

import Styles from './Home.module.css';

function Home() {
  return (
    <div className="main">
      <div className={`${Styles.content} w-full`}>
        <Header />
        <MobileNav />
        <div className="flex flex-col justify-center my-28 md:my-0">
          <h1
            className={`${Styles.feliciano} text-[#c8a97e] feliciano font-extrabold text-center mt-20 text-5xl mb-10`}
          >
            Feliciano
          </h1>
          <h1 className="hidden md:block md:text-white md:text-center md:text-7xl md:font-extrabold">
            BEST RESTAURANT
          </h1>
          <h1 className="text-white text-center text-4xl font-extrabold md:hidden">
            BEST
            {' '}
            <br />
            RESTAURANT
          </h1>
        </div>
      </div>
      <About />
      <Services />
    </div>
  );
}

export default Home;
