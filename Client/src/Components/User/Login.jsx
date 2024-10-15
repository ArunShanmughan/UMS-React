import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from "sweetalert";



const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const admin = useSelector((state)=>state.isAdmin)
  const {register,handleSubmit,formState:{errors}}=useForm();

  const onSubmit = (data)=>{
    axios.post().then((response=>{
      if(response.data.unSuccess){
        Swal.fire({
          title:"Error!",
          text:"User Login Failed",
          icon:"warning",
          confirmButtonText:"Retry"
        }).then(()=>{
          navigate("/Login")
        });
      }

      if(response.data.success){
        dispatch(setAdmin(response.data.success));
        Swal.fir({
          title:"Success",
          text:"User login Success",
          icon:'success',
          confirmButtonText:"OK"
        }).then(()=>{
          navigate('/Home')
        })
      }else{
        Swal.fire({
          title:"Error!",
          text:"User Login Failed",
          icon:"warning",
          confirmButtonText:"Retry"
        }).then(()=>{
          navigate("/Login")
        });
      }
    }))
  }
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">User Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email :
            </label>
            <input
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid Email address",
                },
                required: "Email is required",
              })}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password :
            </label>
            <input
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Must be at least 8 characters long",
                },
                required: "Password is required",
              })}
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login