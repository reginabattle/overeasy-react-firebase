import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <header className="header">
			<h1 className="site-title"><Link to="/">Over-easy</Link></h1>
        	
			<nav className="menu">
				<Link to="/">About</Link>
				<Link to="/">Contact</Link>
			</nav>
      	</header>
    )
}

export default Header