import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeMenu, selectMenus } from '../features/menu/menuSlice';

function HomeMenu() {
  const dispatch = useDispatch();
  const menus = useSelector(selectMenus);

  useEffect(() => {
    dispatch(fetchHomeMenu());
  }, [dispatch]);

  return (
    <div className="pb-24">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#C8A97E]">Specialties</h1>
        <h1 className="font-bold text-7xl">Our Menu</h1>
      </div>
      <div className="text-center py-10 px-32">
        <div className="grid grid-cols-2 border-[1px] border-bordercolor">
          {menus.map((menu) => (
            <div key={menu.id} className="flex">
              <div className="w-[50%]">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="h-[300px] w-full"
                />
              </div>
              <div className="flex flex-col items-start w-[50%] px-8 py-4">
                <div className="flex flex-row justify-between">
                  <h3 className="text-xl font-semibold text-start text-paragraph mr-8">
                    {menu.name}
                  </h3>
                  <p className="text-2xl font-semibold text-[#C8A97E]">
                    $
                    {Number(menu.price)}
                  </p>
                </div>
                <p className="text-paragraph text-start w-[70%] mt-2">
                  {menu.description}
                </p>
                <button
                  type="button"
                  className="border-solid border-1 bg-[#C8A97E] py-2 px-4 mt-2 text-white rounded-[5px]"
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
