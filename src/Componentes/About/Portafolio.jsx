import foto from '../../assets/images/foto.png'
import foto1 from '../../assets/images/foto1.png'
import { useState } from 'react'
import './About.css'

export const Perfil =()=>{
    const [perfil, setPerfil]=useState(foto);
    const cambioPerfil=()=>{
        if(perfil === foto){
            setPerfil(foto1)
        } else{
            setPerfil(foto)
        }
    }
    return (
        <>
         <div className='Perfil'>
            <img src = {perfil} alt="foto" className='fotoPerfil'/>
            <button onClick={cambioPerfil} className='boton'>Cambiar Foto</button>
        </div>
       
        </>
       
    );
}
export const Home =()=>{
    return(
       
        <div className='Contenido'>

           
            
          <div className='Texto'>
            <h2>Hola! soy</h2>
            <h1>Adrian Obando Guaman</h1>
            <h3>un desarrollador web</h3>
            <p> Soy ingeniero de sistemas, con más de 4 año de experiencia en tecnologías
              de la información, he colaborado a empresas e instituciones como
              Farmaelias, HeavenSoft, UMSS, AGETIC, busco una oportunidad para aportar
              mis habilidades y crecer profesionalmente en la empresa convertirme
              experto en desarrollo de software. Me apasiona la tecnología, me gusta la
              innovación y los retos.</p>
            </div>
           <Perfil/>
        </div>
    );
}
