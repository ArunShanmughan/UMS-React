import React from "react";

const AdmBody = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-gray-900 animate-bounce mb-5">
          Welcome, Admin!
        </h1>
        
        <p className="text-lg text-gray-700 mb-5">
          Manage your users efficiently. Add, update, or remove users seamlessly from the admin panel.
        </p>

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Go to User Management
        </button>
      </div>
    </div>
  );
};

export default AdmBody;
