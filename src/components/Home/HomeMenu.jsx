import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../config/ProtectedRoutes';
import { fetchHomeMenu, selectMenus } from '../../features/menu/homeMenuSlice';
import { makeOrder, selectOrders, reset } from '../../features/order/orderSlice';
import Styles from '../../pages/Home.module.css';
import Spinner from '../Spinner';

function HomeMenu() {
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const menus = useSelector(selectMenus);
  const {
    isLoading, isError, isSuccess, message,
  } = useSelector(selectOrders);

  const isAuth = useAuth();

  useEffect(() => {
    dispatch(fetchHomeMenu());
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

  if (saved) {
    return <Navigate to="/orders" replace />;
  }

  if (isLoading) {
    return <Spinner />;
  }

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
          className={`${Styles.card} flex-col md:grid md:grid-cols-2 gap-2 border-[1px]`}
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
                  onClick={() => handleClick(menu.id)}
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
