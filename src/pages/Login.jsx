import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Shared/Spinner';
import AuthImg from '../assets/images/authImg.png';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const {
    user, isLoading, isError, isSuccess, message,
  } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
      });
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#C8A97E] px-4 py-8">
      <div className="bg-white px-8 md:px-12 py-44 lg:mx-20 lg:grid lg:grid-cols-2 lg:px-24 lg:py-28 rounded-lg">
        <div>
          <img
            className="hidden lg:block hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]"
            src={AuthImg}
            alt={AuthImg}
          />
        </div>
        <section className="flex flex-col justify-center align-center gap-6">
          <p className="text-center text-xl font-bold">
            Login and make a reservation
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                className="w-[100%] h-[45px] px-4 border-2 rounded-lg border-solid focus:outline-[#C8A97E]"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-[100%] h-[45px] px-4 border-2 rounded-lg border-solid focus:outline-[#C8A97E]"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="text-white font-bold w-full h-[45px] border-2 rounded-lg border-solid bg-[#C8A97E] hover:bg-black"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-center hover:text-[#C8A97E]">
            <Link to="/register">Sign up / Register?</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
