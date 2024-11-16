import React from 'react'
import './Navbar.css'
import Sidebar from '../Sidebar'

const Navbar = ({ setCategory }) => {
    return (
        <div className='nav'>

            <div className="icon"><Sidebar setCategory={setCategory} /></div>

            <img className='iconImage' src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                alt="Logo" />
        </div>
    )
}

export default Navbar