import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import './Header.css';

export const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    scrollSpy.update();

    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Icono de menú hamburguesa */}
        </button>
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <div className="menu-cont">
          <li className={activeLink === 'home' ? 'active' : ''}>
            <Link to="home" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{props.home}</Link>
          </li>
          </div>
          <div className='menu-cont'> 
          <li className={activeLink === 'aboutme' ? 'active' : ''}>
            <Link to="aboutme" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{props.about}</Link>
          </li>
          </div>
          <div className='menu-cont'>
          <li className={activeLink === 'proyectos' ? 'active' : ''}>
            <Link to="proyectos" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{props.proyectos}</Link>
          </li>
          </div>
          <div className='menu-cont'>
          <li className={activeLink === 'educacion' ? 'active' : ''}>
            <Link to="educacion" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{props.educacion}</Link>
          </li>
          </div>
          <div className='menu-cont'>
          <li className={activeLink === 'habilidades' ? 'active' : ''}>
            <Link to="habilidades" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{props.habilidades}</Link>
          </li>
          </div>
          <div className='menu-cont'>
          <li className={activeLink === 'contactame' ? 'active' : ''}>
            <Link to="contactame" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{props.contacto}</Link>
          </li>
          </div>
          
        </ul>
      </nav>
    </header>
  );
};
