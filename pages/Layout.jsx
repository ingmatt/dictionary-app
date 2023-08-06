import React from 'react'
import { Outlet } from "react-router-dom";
import { GiBookmark } from "react-icons/gi"

export default function Layout() {
    
  return (
    <div >
      <nav className="header-div on">
        <GiBookmark />
      </nav>
      <Outlet/>
    </div>
  )
};