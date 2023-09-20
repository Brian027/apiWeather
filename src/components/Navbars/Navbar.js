import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/icons/Weather-api.png'
import './Navbar.css'
import SearchBar from '../SearchBars/SearchBar'
import LoginButton from '../Buttons/LoginButton'

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <ul>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="callToAction">
          <Link to="/manageApi"><LoginButton /></Link>
          <SearchBar />
        </div>
    </nav>
  )
}

export default Navbar