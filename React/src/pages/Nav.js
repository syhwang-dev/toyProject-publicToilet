import React, { useState } from 'react';
import '../styles/tmp.css'
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Nav = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarActive(prevState => !prevState);
      toggleMenuIcon();
    };
  
    const closeSidebar = () => {
      setIsSidebarActive(false);
      toggleMenuIcon();
    };
  
    const toggleMenuIcon = () => {
      const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
      const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
      if (menuToggleBars && menuToggleTimes) {
        menuToggleBars.classList.toggle('fa-bars');
        menuToggleBars.classList.toggle('fa-xmark');
        menuToggleTimes.classList.toggle('fa-xmark');
        menuToggleTimes.classList.toggle('fa-bars');
      }
    };
  
    return (
      <>
        {/* Navigation */}
        <a className="menu-toggle rounded" href="#" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarActive ? 'fa-xmark' : 'fa-bars'}`}></i>
        </a>
        <nav id="sidebar-wrapper" className={isSidebarActive ? 'active' : ''}>
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#page-top" onClick={closeSidebar}>
                More info
              </a>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/table">화장실 리스트</Link>
              {/* <a href="#page-top" onClick={closeSidebar}></a> */}
            </li>
            <li className="sidebar-nav-item">
              <a href="#about" onClick={closeSidebar}>
                화장실 등록
              </a>
            </li>
            
            <li className="sidebar-nav-item">
              {/* <a href="#services" onClick={closeSidebar}>
                로그아웃
              </a>     */}
              <Logout ></Logout>
            </li>
          </ul>
        </nav>
      </>
    );
  };

export default Nav