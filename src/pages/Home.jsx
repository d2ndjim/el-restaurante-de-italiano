import Header from '../components/Header';
import Styles from './Home.module.css';

function Home() {
  return (
    <div className="main">
      <div className={`${Styles.content}`}>
        <Header />
        <h1 className="text-[#C8A97E] font-bold text-center mt-20 text-5xl mb-10">
          Feliciano
        </h1>
        <h1 className="text-white text-center text-7xl font-extrabold">
          BEST RESTAURANT
        </h1>
      </div>
    </div>
  );
}

export default Home;
