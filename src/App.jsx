import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from './Componentes/Home';
import { Aboutme } from './Componentes/About/About';
import { Header } from './Componentes/Header/Header';
import { Educacion } from './Componentes/Education/Education';
import { Contactame } from './Componentes/Contactame/Contactame';
import { Proyectos } from './Componentes/Proyectos/Proyectos';
import { Habilidades } from './Componentes/Habilidades/Habilidades';
import { Element } from 'react-scroll';

function App() {
  return (
    <Router>
      <Header home={"HOME"} about={"SOBRE MI"} proyectos={"PROYECTOS"} educacion={"EDUCACION"} habilidades={"HABILIDADES"} contacto={"CONTACTAME"} />
      <Element name="home"><Home /></Element>
      <Element name="aboutme"><Aboutme /></Element>
      <Element name="proyectos"><Proyectos /></Element>
      <Element name="educacion"><Educacion /></Element>
      <Element name="habilidades"><Habilidades /></Element>
      <Element name="contactame"><Contactame /></Element>
    </Router>
  );
}

export default App;
