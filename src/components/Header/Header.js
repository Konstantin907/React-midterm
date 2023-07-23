import React, {useRef} from 'react';
import './Header.css';
import {FaBars, FaTimes} from "react-icons/fa"
import nba from '../../Photos/nba.png'

const Header = () => {

    const navRef = useRef();

    const showNavbar =() => {
        navRef.current.classList.toggle("responsive_nav");
    }


  return (
   <header>
        <h3 className='image'><img className='logoo' src={nba} /></h3>
        <nav ref={navRef}>
            <a href="#">Home</a>
            <a href="#">Teams</a>
            <a href="#">Players</a>
            <a href="#">Stats</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
   </header>
  );
};

export default Header;