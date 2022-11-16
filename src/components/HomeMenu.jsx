import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeMenu, selectMenus } from '../features/menu/menuSlice';
import Styles from '../pages/Home.module.css';

function HomeMenu() {
  const dispatch = useDispatch();
  const menus = useSelector(selectMenus);

  useEffect(() => {
    dispatch(fetchHomeMenu());
  }, [dispatch]);

  return (
    <div className="pb-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold text-[#C8A97E]">
          Specialties
        </h1>
        <h1 className="text-5xl font-bold md:text-7xl">Our Menu</h1>
      </div>
      <div className="text-center py-10 px-4 md:px-32">
        <div
          className={`${Styles.card} flex flex-col md:grid md:grid-cols-2 gap-2 border-[1px]`}
        >
          {menus.map((menu) => (
            <div key={menu.id} className="flex flex-col md:flex-row">
              <div className="w-full md:w-[50%]">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="h-[300px] w-full rounded"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 md:items-start md:w-[50%] px-3 py-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl md:text-xl font-semibold text-start mr-8 ">
                    {menu.name}
                  </h3>
                  <p className="text-2xl font-semibold text-[#C8A97E]">
                    $
                    {Number(menu.price)}
                  </p>
                </div>
                <p className="text-start text-xl md:text-base md:w-[70%] mt-2">{menu.description}</p>
                <button
                  type="button"
                  className="border-solid text-[20px] md:text-xl border-1 bg-[#C8A97E] md:py-3 py-3 px-4 md:px-6 mt-2 text-white rounded-lg"
                >
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeMenu;
