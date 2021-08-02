import React, { useState, useRef, useEffect } from 'react';
import {FaBars} from 'react-icons/fa'
import { links } from './NavBarData';
import './NavBar.css';
import './NavBarData';

 const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [hovered, setHovered] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    // Toggles the hovered effect over the navbar
    const toggleActive = () =>{
        setHovered(!hovered);
    }
    // Calculates the height of link in mobile width, to add the links dynamically generated
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);
     return (
         <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
        {/* Adding the toggle on the links */}
        <ul 
            className ='links' 
            onMouseEnter={toggleActive} 
            onMouseLeave={toggleActive} 
            ref={linksRef} 
        >
        {/* Destructuring links from data file using mapping*/}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                    {/* Setting the CSS for the hovered nav link 
                    When the nav bar is hovered then only the hovered item is highlighted,
                    the rest of the nav links have their opacities reduced by 50%*/}
                  <a className= {hovered ? 'hovered-nav' : ''} href={url} >{text}</a>
                </li>
              );
            })} 
          </ul>
          </div>
        </div>
    </nav>
     )
 }
 
 export default NavBar
 