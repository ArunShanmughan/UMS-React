import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setAdmin } from '../redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

const ALoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Admin = useSelector((state) => state.isAdmin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:8000/adminLogin', data, { withCredentials: true })
      .then(response => {
        if(response.data.passVer){
          Swal.fire({
            title: 'Error!',
            text: 'Admin Login failed! Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry'
          }).then(() => {
            navigate('/adminLogin');
          });
        }
        if(response.data.AdminVer){
            dispatch(setAdmin(response.data.AdminVer));
          Swal.fire({
            title: 'Success!',
            text: 'Admin Login successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate('/adminHome');
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Admin Login failed! Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry'
          }).then(() => {
            navigate('/adminLogin');
          });
        }
      })
      .catch(error => {
        console.error('There was an error submitting the data:', error);
      });
  };
  console.log(Admin)
  return (
    <div className="h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-2xl p-12 shadow-2xl w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-5xl font-bold text-white text-center mb-10 animate-pulse tracking-wider">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="input-field relative">
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
              className="w-full px-6 py-4 rounded-lg bg-gray-700 focus:bg-gray-600 focus:ring-4 focus:ring-purple-500 text-white placeholder-gray-400 transition duration-300"
              placeholder="Email Address"
            />
            <FontAwesomeIcon icon={faEnvelope} className="absolute right-5 top-5 text-gray-400" />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="input-field relative">
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
              className="w-full px-6 py-4 rounded-lg bg-gray-700 focus:bg-gray-600 focus:ring-4 focus:ring-purple-500 text-white placeholder-gray-400 transition duration-300"
              placeholder="Password"
            />
            <FontAwesomeIcon icon={faLock} className="absolute right-5 top-5 text-gray-400" />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg py-3 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-110"
          >
            Log In
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </button>
        </form>

        <div className="mt-8 flex justify-center space-x-8">
          <a href="#" className="text-white hover:text-pink-500 transition duration-300">
            <FontAwesomeIcon icon={faFacebookF} className="fab text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-pink-500 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} className="fab text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-pink-500 transition duration-300">
            <FontAwesomeIcon icon={faGoogle} className="fab text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ALoginForm;
