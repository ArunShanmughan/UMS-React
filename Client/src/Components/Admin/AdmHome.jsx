import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdmBody from './AdmBody'

const AdmHome = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar takes a fixed width */}
      <div className="w-1/5">
        <AdminNavbar />
      </div>
      
      {/* Body takes the remaining width */}
      <div className="w-4/5">
        <AdmBody />
      </div>
    </div>
  );
}

export default AdmHome