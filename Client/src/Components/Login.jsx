import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/Slice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Admin = useSelector((state) => state.isAdmin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:8000/login', data, { withCredentials: true })
      .then((response) => {
        if (response.data.passVer) {
          Swal.fire({
            title: 'Error!',
            text: 'User Login failed! Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry',
          }).then(() => {
            navigate('/');
          });
        }
        if (response.data.userVer) {
          dispatch(setUser(response.data.userVer));
          Swal.fire({
            title: 'Success!',
            text: 'User Login successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate('/profile');
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'User Login failed! Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry',
          }).then(() => {
            navigate('/');
          });
        }
      })
      .catch((error) => {
        console.error('There was an error submitting the data:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-purple-900 via-blue-700 to-indigo-900">
      <div className="bg-black bg-opacity-30 backdrop-blur-2xl rounded-3xl p-10 shadow-xl w-full max-w-md transform hover:scale-110 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-8 text-center animate-bounce">
          Log In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="relative group">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              className="w-full px-5 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-4 focus:ring-purple-500 text-white placeholder-gray-300 transition duration-300 hover:bg-opacity-40"
              placeholder="Email Address"
            />
            <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-4 text-pink-500 group-hover:animate-spin transition-all duration-500" />
            {errors.email && <p className="text-pink-400 text-sm mt-2">{errors.email.message}</p>}
          </div>

          <div className="relative group">
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              type="password"
              id="password"
              className="w-full px-5 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-4 focus:ring-purple-500 text-white placeholder-gray-300 transition duration-300 hover:bg-opacity-40"
              placeholder="Password"
            />
            <FontAwesomeIcon icon={faLock} className="absolute right-4 top-4 text-pink-500 group-hover:animate-spin transition-all duration-500" />
            {errors.password && <p className="text-pink-400 text-sm mt-2">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-pink-500"
          >
            Log In
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </form>

        <p className="text-white text-center mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="font-bold text-pink-400 hover:underline hover:text-pink-300 transition-colors duration-200">
            Sign Up
          </a>
        </p>

        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-pink-300 transition-colors duration-200">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="text-white hover:text-pink-300 transition-colors duration-200">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="text-white hover:text-pink-300 transition-colors duration-200">
            <FontAwesomeIcon icon={faGoogle} className="text-2xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
