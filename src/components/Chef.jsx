import owner from '../assets/images/chef-4.jpg';
import headChef from '../assets/images/chef-2.jpg';
import Chef1 from '../assets/images/chef-1.jpg';
import Chef2 from '../assets/images/chef-3.jpg';

function Chef() {
  return (
    <div className="px-4 md:px-20 pb-20">
      <div className="text-center py-20">
        <h2 className="text-4xl md:text-5xl text-[#C8A97E] font-bold">Chef</h2>
        <h3 className="text-4xl md:text-7xl font-bold">Our Master Chef</h3>
      </div>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-4 place-items-center">
        <div className="flex flex-col justify-between gap-4" data-aos="fade-up">
          <img
            src={owner}
            alt={owner}
            className="h-80 w-96 md:h-96 md:w-72 rounded-lg"
          />
          <p className="text-xl font-bold">John Smooth</p>
          <p className="text-base text-[#B2B2B2]">Restaurant Owner</p>
        </div>
        <div className="flex flex-col justify-between gap-4" data-aos="fade-up">
          <img
            src={headChef}
            alt={headChef}
            className="h-80 w-96 md:h-96 md:w-72 rounded-lg"
          />
          <p className="text-xl font-bold">Rebecca Welson</p>
          <p className="text-base text-[#B2B2B2]">Head Chef</p>
        </div>
        <div className="flex flex-col justify-between gap-4" data-aos="fade-up">
          <img
            src={Chef1}
            alt={Chef1}
            className="h-80 w-96 md:h-96 md:w-72 rounded-lg"
          />
          <p className="text-xl font-bold">Kharl Branyt</p>
          <p className="text-base text-[#B2B2B2]">Chef</p>
        </div>
        <div className="flex flex-col justify-between gap-4" data-aos="fade-up">
          <img
            src={Chef2}
            alt={Chef2}
            className="h-80 w-96 md:h-96 md:w-72 rounded-lg"
          />
          <p className="text-xl font-bold">Luke Simon</p>
          <p className="text-base text-[#B2B2B2]">Chef</p>
        </div>
      </div>
    </div>
  );
}

export default Chef;
