import React from "react";
import { Swal } from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSignOutAlt, FaUsers } from "react-icons/fa";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Admin = useSelector((state) => state.isAdmin);

  function handleClick() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setAdmin(false));
        navigate("/adminLogin");
      }
    });
  }

  return (
    <div className="bg-gray-900 text-white">
      <nav className="flex items-center justify-between p-4 shadow-lg">
        <div className="text-2xl font-bold">Admin Panel</div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              to="/users"
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-indigo-300 transition duration-300 ease-in-out"
            >
              <FaUsers />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleClick}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-red-300 transition duration-300 ease-in-out"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
