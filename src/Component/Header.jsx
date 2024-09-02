import React from 'react';
import './Header.css';
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOffSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";

function Header() {
    return (
        <header className="header">
            <div>
                <IoMenuSharp style={{ height: '50px', width: '50px' }} />
            </div>
            <div className="logo">
                <p><FaYoutube style={{ color: 'red', height: '30px', width: '60px', margin: '0px', padding: '0px' }} /></p>
                <h3 style={{fontFamily:'sans-serif'}}>YouTube </h3>
                <p style={{fontWeight:'100'}}>IN</p>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" />
                <button className="searchButton"><FaSearch /></button>
                <p><CiMicrophoneOn /></p>
            </div>
            <div className="header__right">
                <IoNotificationsOffSharp className='icon1' style={{color:'red'}} />
                <CgProfile  className='icon2' style={{color:'blue'}}/>
            </div>
        </header>
    );
}

export default Header;