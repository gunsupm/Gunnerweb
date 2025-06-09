  import React, { useState,useEffect, useRef  } from 'react'; 
  import style from './Nav.module.css';

  function Nav({ navLinks, activeSectionId, scrollToSection })  {

    return (
      <nav className={style.Navbar}>
        <ul>
          {navLinks.map((link,index) => (
            <li key={index}
              className={`${style.navItem} ${activeSectionId === link.id ? style.activeNavItem : ''}`} 
            >
              <a
                href={link.href}
                onClick={() => scrollToSection(link.id)} 
                className={`${style.navLink} ${activeSectionId === link.id }`} 
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  } 

  export default Nav;