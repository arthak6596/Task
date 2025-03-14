import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path)=> {
    navigate(path)
  }
  return (
    <nav className="bg-white px-4 py-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <img onClick={()=>handleNavigation('/')} src="/api/placeholder/180/40" alt="Logo" className="h-8 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-6">
          <span onClick={()=>handleNavigation('/services')} className="text-gray-700 hover:text-Orange cursor-pointer">Services</span>
          <span onClick={()=>handleNavigation('/login')} className="text-gray-700 hover:text-Orange cursor-pointer">Sign up / Log in</span>
          <button className="bg-orange-500 hover:bg-Orange text-white px-4 py-2 rounded-md">
            Become a 
          </button>
        </div>
    </nav>
  )
}

export default Navbar