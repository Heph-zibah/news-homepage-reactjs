import React from 'react'
import logo from '../../assets/images/logo.svg'
import {VscMenu} from 'react-icons/vsc'
import { navLinks } from '../Data'

const Navbar = () => {
  return (
    <>
        <header>
            <div className="header__logo">
                <img src={logo} alt="company logo" />
            </div>
            <nav>
                <ul className='nav__links'>
                    {navLinks.map((navlink) => {
                        const {id, url, text} = navlink
                        return <li key={id}>{text}</li>
                    })}
                </ul>
            </nav>
            <div className="mobile__menu">
                <VscMenu/>
            </div>
        </header>
    </>
  )
}

export default Navbar