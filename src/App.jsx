import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import { Home} from './Componentes/About/Portafolio';
import { Header } from './Componentes/Header/Header';
import { Educacion } from './Componentes/Education/Education';
import { Contactame } from './Componentes/Contactame/Contactame';
import { Proyectos} from './Componentes/Proyectos/Proyectos';
import { Habilidades } from './Componentes/Habilidades/Habilidades';

function App() {
  return (
    <Router>
      <Header about={"SOBRE MI"} proyectos={"PROYECTOS"} educacion={"EDUCACION"} habilidades={"HABILIDADES"} contacto={"CONTACTAME"}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/habilidades" element={<Habilidades/>}/>
        <Route path="/contactame" element={<Contactame />} />
      </Routes>
    </Router>
  )
}

export default App
