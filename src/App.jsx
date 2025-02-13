import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from './Componentes/Home';
import { Aboutme } from './Componentes/About/About';
import { Header } from './Componentes/Header/Header';
import { Educacion } from './Componentes/Education/Education';
import { Contactame } from './Componentes/Contactame/Contactame';
import { Proyectos } from './Componentes/Proyectos/Proyectos';
import { Habilidades } from './Componentes/Habilidades/Habilidades';
import { Footer } from './Componentes/Footer/Footer';
import { Element } from 'react-scroll';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const containerClass = isDesktop ? 'desktop' : isTablet ? 'tablet' : isMobile ? 'mobile' : '';

  return (
    <div className={`app-container ${containerClass}`}>
      <Router basename='/Portafolio_React'>
        <Header home={"HOME"} about={"SOBRE MI"} proyectos={"PROYECTOS"} educacion={"EDUCACION"} habilidades={"HABILIDADES"} contacto={"CONTACTAME"} />
        <Element name="home"><Home /></Element>
        <Element name="aboutme"><Aboutme /></Element>
        <Element name="proyectos"><Proyectos /></Element>
        <Element name="educacion"><Educacion /></Element>
        <Element name="habilidades"><Habilidades /></Element>
        <Element name="contactame"><Contactame /></Element>
        <Element name="footer"><Footer /></Element>
      </Router>
    </div>
  );
}

export default App;
