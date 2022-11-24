/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Shared/Spinner';
import AuthImg from '../assets/images/authImg.png';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    first_name, last_name, email, password, password2,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#C8A97E] px-4 py-8">
      <div className="bg-white px-8 md:px-12 py-44 lg:mx-20 lg:grid lg:grid-cols-2 lg:px-24 lg:py-28 rounded-lg">
        <div>
          <img
            className="hidden lg:block mt-10 hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]"
            src={AuthImg}
            alt={AuthImg}
          />
        </div>
        <section className="flex flex-col justify-center align-center gap-6">
          <p className="text-center text-xl font-bold">
            Please Create an account
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                className="w-[100%] h-[45px] px-4 border-2 rounded-lg border-solid focus:outline-[#C8A97E]"
                id="first_name"
                name="first_name"
                value={first_name}
                placeholder="Enter your first name"
                onChange={onChange}
              />
            </div>
            <div>
              <input
                type="text"
                className="w-[100%] h-[45px] px-4 border-2 rounded-lg border-solid focus:outline-[#C8A97E]"
                id="first_name"
                name="last_name"
                value={last_name}
                placeholder="Enter your last name"
                onChange={onChange}
              />
            </div>
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
            <div>
              <input
                type="password"
                className="w-[100%] h-[45px] px-4 border-2 rounded-lg border-solid focus:outline-[#C8A97E]"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
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
            <Link to="/login">Have an account? / Sign in</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
