import React from 'react'
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate()

  function UserList(){
    navigate("/Users")
  }

  function logout(){
    navigate("/")
  }

  return (
    <div>
      <button onClick={UserList}>Users</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminNavbar