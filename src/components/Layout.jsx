import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Card from './Card'
import NavBar from './NavBar'

function Layout() {
  return (
    <div>
      <Header />
      <br />
      <NavBar />
      <Card>
        <Outlet />
      </Card>
    </div>
  )
}

export default Layout
