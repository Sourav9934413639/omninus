import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
        <Link to={'/products'}><button>Products</button></Link>
        <Link to={'/login'}><button>Log In</button></Link>

    </nav>
  )
}

export default Navbar
