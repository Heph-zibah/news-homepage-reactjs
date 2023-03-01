import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { navLinks } from '../Data'
import menuClose from '../../assets/images/icon-menu-close.svg'
import menuOpen from '../../assets/images/icon-menu.svg'

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
  return (
    <>
        <header>
            <div className="header__logo">
                <img src={logo} alt="company logo" />
            </div>
            <nav>
                <ul>
                    {navLinks.map((navlink) => {
                        const {id, url, text} = navlink
                        return <li key={id}><a href={url}>{text}</a></li>
                    })}
                </ul>
            </nav>
            <div className="mobile__menu" onClick={() => setOpenNav(!openNav)}>
                <img src={menuOpen} alt="menu open icon" />
            </div>
        </header>
       {openNav &&  <div className="mobile__nav">
            <div>
                <img src={menuClose} alt="close icon"  onClick={() => setOpenNav(!openNav)} className='menu__close'/>
                <nav> 
                    <ul>
                        {navLinks.map((navlink) => {
                            const {id, url, text} = navlink
                            return <li key={id}><a href={url}>{text}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        </div>}
    </>
  )
}

export default Navbar 