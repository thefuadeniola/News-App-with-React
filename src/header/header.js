import React from 'react'
import './header.css'
import logo from '../assets/earth.png'
import { AiOutlineMenu } from 'react-icons/ai'
import $ from 'jquery'


export default function Header () {    
    return (
        <header>
           <nav>
                <div className='logo__class'>
                    <img src={logo} className='logo' />
                    <h2 className='logo__header'>MAVE NEWS.COM</h2>
                </div>
                <div className='navlinks'>
                    <div className='navlink'><a className='nav__link'>Home</a></div>
                    <div className='navlink'><a className='nav__link'>Trending</a></div>
                    <div className='navlink'><a className='nav__link'>Reports</a></div>
                </div>
                <div className='second__logo'>
                    <img src={logo} className='logo' />
                    <h2 className='logo__header'>MAVE NEWS.COM</h2>
                </div>
                <div className='toggler'>
                    <button id='toggler'><span>Filter News</span> <AiOutlineMenu/></button>
                </div>
           </nav>
        </header>
    )
}