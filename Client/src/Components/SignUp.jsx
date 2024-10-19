import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/signup", data, { withCredentials: true })
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "User registered successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/");
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "There was an error submitting the data. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("There was an error submitting the data:", error);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600">
      <div className="bg-white bg-opacity-20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl w-full max-w-lg transform hover:scale-105 transition-all duration-500 ease-in-out hover:bg-opacity-30 hover:shadow-xl">
        <h2 className="text-5xl font-bold text-white mb-10 text-center animate-bounce">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="input-field relative">
            <input
              {...register("name", { required: "Full Name is required" })}
              type="text"
              id="name"
              className="w-full px-5 py-4 rounded-lg bg-white bg-opacity-30 focus:bg-opacity-40 focus:ring-4 focus:ring-blue-500 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
              placeholder="Full Name"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute right-5 top-5 text-white"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div className="input-field relative">
            <input
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              className="w-full px-5 py-4 rounded-lg bg-white bg-opacity-30 focus:bg-opacity-40 focus:ring-4 focus:ring-blue-500 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
              placeholder="Email Address"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute right-5 top-5 text-white"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div className="input-field relative">
            <input
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Invalid phone number",
                },
              })}
              type="tel"
              id="phone"
              className="w-full px-5 py-4 rounded-lg bg-white bg-opacity-30 focus:bg-opacity-40 focus:ring-4 focus:ring-blue-500 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
              placeholder="Phone Number"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute right-5 top-5 text-white"
            />
            {errors.phone && (
              <span className="text-red-600">{errors.phone.message}</span>
            )}
          </div>

          <div className="input-field relative">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type="password"
              id="password"
              className="w-full px-5 py-4 rounded-lg bg-white bg-opacity-30 focus:bg-opacity-40 focus:ring-4 focus:ring-blue-500 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
              placeholder="Password"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute right-5 top-5 text-white"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-600 hover:opacity-90 focus:ring-4 focus:ring-pink-500 transition-all duration-300 transform hover:scale-110"
          >
            Sign Up
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </form>

        <p className="text-white text-center mt-8">
          Already have an account?{" "}
          <a href="/" className="font-bold hover:underline text-pink-200">
            Log in
          </a>
        </p>

        <div className="mt-10 flex justify-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-3xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
