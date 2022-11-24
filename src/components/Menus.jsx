import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../config/ProtectedRoutes';
import { fetchDessert, selectDesserts } from '../features/menu/dessertSlice';
import { fetchDrinks, selectDrinks } from '../features/menu/drinkSlice';
import { fetchNonVegetarian, selectNonVegetarian } from '../features/menu/nonVegetarianSlice';
import { fetchVegetarian, selectVegetarian } from '../features/menu/vegetarianSlice';
import { fetchWines, selectWines } from '../features/menu/wineSlice';
import { makeOrder, selectOrders, reset } from '../features/order/orderSlice';
import Spinner from './Spinner';

function Menus() {
  const dispatch = useDispatch();
  const [isVegetarian, setIsVegetarian] = useState(true);
  const [isNonVegetarian, setIsNonVegetarian] = useState(false);
  const [isDessert, setIsDessert] = useState(false);
  const [isDrinks, setIsDrinks] = useState(false);
  const [isWines, setIsWines] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isHoverVegetarian, setIsHoverVegetarian] = useState(false);
  const [isHoverNonVegetarian, setIsHoverNonVegetarian] = useState(false);
  const [isHoverDessert, setIsHoverDessert] = useState(false);
  const [isHoverDrink, setIsHoverDrink] = useState(false);
  const [isHoverWine, setIsHoverWine] = useState(false);

  const handleMouseEnterVegetarian = () => {
    setIsHoverVegetarian(true);
  };
  const handleMouseLeaveVegetarian = () => {
    setIsHoverVegetarian(false);
  };

  const handleMouseEnterNonVegetarian = () => {
    setIsHoverNonVegetarian(true);
  };
  const handleMouseLeaveNonVegetarian = () => {
    setIsHoverNonVegetarian(false);
  };

  const handleMouseEnterDessert = () => {
    setIsHoverDessert(true);
  };
  const handleMouseLeaveDessert = () => {
    setIsHoverDessert(false);
  };

  const handleMouseEnterDrink = () => {
    setIsHoverDrink(true);
  };
  const handleMouseLeaveDrink = () => {
    setIsHoverDrink(false);
  };

  const handleMouseEnterWine = () => {
    setIsHoverWine(true);
  };
  const handleMouseLeaveWine = () => {
    setIsHoverWine(false);
  };

  const {
    isLoading, isError, isSuccess, message,
  } = useSelector(selectOrders);

  const isAuth = useAuth();

  const handleClick = (id) => {
    if (isAuth) {
      Swal.fire({
        title: 'Confirm Order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#C8A97E',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(makeOrder(id));
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please login to make order!',
      });
    }
  };

  function handleVegetarian() {
    setIsVegetarian(true);
    setIsNonVegetarian(false);
    setIsDessert(false);
    setIsDrinks(false);
    setIsWines(false);
  }

  function handleNonVegetarian() {
    setIsVegetarian(false);
    setIsNonVegetarian(true);
    setIsDessert(false);
    setIsDrinks(false);
    setIsWines(false);
  }

  function handleDessert() {
    setIsVegetarian(false);
    setIsNonVegetarian(false);
    setIsDessert(true);
    setIsDrinks(false);
    setIsWines(false);
  }

  function handleDrink() {
    setIsVegetarian(false);
    setIsNonVegetarian(false);
    setIsDessert(false);
    setIsDrinks(true);
    setIsWines(false);
  }

  function handleWine() {
    setIsVegetarian(false);
    setIsNonVegetarian(false);
    setIsDessert(false);
    setIsDrinks(false);
    setIsWines(true);
  }

  const vegetarians = useSelector(selectVegetarian);
  const nonVegetarians = useSelector(selectNonVegetarian);
  const desserts = useSelector(selectDesserts);
  const wines = useSelector(selectWines);
  const drinks = useSelector(selectDrinks);

  useEffect(() => {
    dispatch(fetchVegetarian());
    dispatch(fetchNonVegetarian());
    dispatch(fetchDessert());
    dispatch(fetchDrinks());
    dispatch(fetchWines());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      Swal.fire('Error!', message, 'error');
    }

    if (isSuccess) {
      setSaved(true);
      Swal.fire('Confirmed!', 'Your order has been confirmed.', 'success');
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  if (saved) {
    return <Navigate to="/orders" replace />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="">
      <div className="flex flex-col gap-2 px-4 md:grid md:grid-cols-5 md:gap-0 lg:px-32 md:pb-9">
        <button
          type="button"
          className="py-4 md:py-2 md:text-base lg:text-xl lg:py-6 text-xl font-bold hover:bg-[#C8A97E] hover:text-white"
          onClick={handleVegetarian}
          onMouseEnter={handleMouseEnterVegetarian}
          onMouseLeave={handleMouseLeaveVegetarian}
          style={
            isVegetarian || isHoverVegetarian
              ? { backgroundColor: '#c09d6c', color: 'white' }
              : { backgroundColor: '#FFFFFF', color: 'black' }
          }
        >
          Vegetarian
        </button>
        <button
          type="button"
          className="py-4 md:text-base lg:text-xl lg:py-6 text-xl font-bold hover:bg-[#C8A97E] hover:text-white"
          onClick={handleNonVegetarian}
          onMouseEnter={handleMouseEnterNonVegetarian}
          onMouseLeave={handleMouseLeaveNonVegetarian}
          style={
            isNonVegetarian || isHoverNonVegetarian
              ? { backgroundColor: '#c09d6c', color: 'white' }
              : { backgroundColor: '#FFFFFF', color: 'black' }
          }
        >
          Non Vegetarian
        </button>
        <button
          type="button"
          className="py-4 md:text-base lg:text-xl lg:py-6 text-xl font-bold hover:bg-[#C8A97E] hover:text-white"
          onClick={handleDessert}
          onMouseEnter={handleMouseEnterDessert}
          onMouseLeave={handleMouseLeaveDessert}
          style={
            isDessert || isHoverDessert
              ? { backgroundColor: '#c09d6c', color: 'white' }
              : { backgroundColor: '#FFFFFF', color: 'black' }
          }
        >
          Desserts
        </button>
        <button
          type="button"
          className="py-4 md:text-base lg:text-xl lg:py-6 text-xl font-bold hover:bg-[#C8A97E] hover:text-white"
          onClick={handleDrink}
          onMouseEnter={handleMouseEnterDrink}
          onMouseLeave={handleMouseLeaveDrink}
          style={
            isDrinks || isHoverDrink
              ? { backgroundColor: '#c09d6c', color: 'white' }
              : { backgroundColor: '#FFFFFF', color: 'black' }
          }
        >
          Drinks
        </button>
        <button
          type="button"
          className="py-4 md:text-base lg:text-xl lg:py-6 text-white text-xl font-bold hover:bg-[#C8A97E] hover:text-white"
          onClick={handleWine}
          onMouseEnter={handleMouseEnterWine}
          onMouseLeave={handleMouseLeaveWine}
          style={
            isWines || isHoverWine
              ? { backgroundColor: '#c09d6c', color: 'white' }
              : { backgroundColor: '#FFFFFF', color: 'black' }
          }
        >
          Wines
        </button>
      </div>
      <div className="text-center py-10 px-4 lg:px-32 mb-28">
        {isVegetarian && (
          <div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-2 border-[1px]"
            data-aos="fade-up"
          >
            {vegetarians.map((menu) => (
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
                  <p className="text-start text-xl md:text-base md:w-[70%] mt-2">
                    {menu.description}
                  </p>
                  <button
                    type="button"
                    className="border-solid text-[20px] md:text-xl border-1 bg-[#C8A97E] md:py-3 py-3 px-4 md:px-6 mt-2 text-white rounded-lg"
                    onClick={() => handleClick(menu.id)}
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {isNonVegetarian && (
          <div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-2 border-[1px]"
            data-aos="fade-up"
          >
            {nonVegetarians.map((menu) => (
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
                  <p className="text-start text-xl md:text-base md:w-[70%] mt-2">
                    {menu.description}
                  </p>
                  <button
                    type="button"
                    className="border-solid text-[20px] md:text-xl border-1 bg-[#C8A97E] md:py-3 py-3 px-4 md:px-6 mt-2 text-white rounded-lg"
                    onClick={() => handleClick(menu.id)}
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {isDessert && (
          <div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-2 border-[1px]"
            data-aos="fade-up"
          >
            {desserts.map((menu) => (
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
                  <p className="text-start text-xl md:text-base md:w-[70%] mt-2">
                    {menu.description}
                  </p>
                  <button
                    type="button"
                    className="border-solid text-[20px] md:text-xl border-1 bg-[#C8A97E] md:py-3 py-3 px-4 md:px-6 mt-2 text-white rounded-lg"
                    onClick={() => handleClick(menu.id)}
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {isDrinks && (
          <div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-2 border-[1px]"
            data-aos="fade-up"
          >
            {drinks.map((menu) => (
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
                  <p className="text-start text-xl md:text-base md:w-[70%] mt-2">
                    {menu.description}
                  </p>
                  <button
                    type="button"
                    className="border-solid text-[20px] md:text-xl border-1 bg-[#C8A97E] md:py-3 py-3 px-4 md:px-6 mt-2 text-white rounded-lg"
                    onClick={() => handleClick(menu.id)}
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {isWines && (
          <div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-2 border-[1px]"
            data-aos="fade-up"
          >
            {wines.map((menu) => (
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
                  <p className="text-start text-xl md:text-base md:w-[70%] mt-2">
                    {menu.description}
                  </p>
                  <button
                    type="button"
                    className="border-solid text-[20px] md:text-xl border-1 bg-[#C8A97E] md:py-3 py-3 px-4 md:px-6 mt-2 text-white rounded-lg"
                    onClick={() => handleClick(menu.id)}
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menus;
