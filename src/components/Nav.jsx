  import React, { useState,useEffect, useRef  } from 'react'; 
  import style from './Nav.module.css';

  function Nav({ navLinks, activeSectionId, scrollToSection })  {
  //Hamburger
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false); 
  };

  
    return (
      <nav className={style.Navbar}>
       <div className={style.hammburger} onClick={toggleMenu}>
        <div className={`${style.bar} ${isMenuOpen ? style.open : ''}`}></div>
        <div className={`${style.bar} ${isMenuOpen ? style.open : ''}`}></div>
        <div className={`${style.bar} ${isMenuOpen ? style.open : ''}`}></div>
      </div>
        <ul className={`${style.navList} ${isMenuOpen ? style.open : ''}`}>
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