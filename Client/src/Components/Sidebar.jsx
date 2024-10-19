import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin } from '../redux/Slice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Admin = useSelector((state) => state.isAdmin);

    function handleClick() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setAdmin(false));
                navigate('/adminLogin');
            }
        });
    }

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="h-screen w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-5 shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold mb-10 text-center text-indigo-400 animate-fadeIn">Hello Admin</div>
                <nav>
                    <ul>
                        <li className="mb-6">
                            <Link 
                                to="/adminHome" 
                                className="flex items-center space-x-2 p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-30 hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <FaTachometerAlt />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="mb-6">
                            <Link 
                                to="/users" 
                                className="flex items-center space-x-2 p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-30 hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <FaUsers />
                                <span>Users</span>
                            </Link>
                        </li>
                        <li className="mb-6">
                            <button 
                                onClick={handleClick} 
                                className="flex items-center space-x-2 p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-30 hover:text-red-400 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <FaUsers />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
