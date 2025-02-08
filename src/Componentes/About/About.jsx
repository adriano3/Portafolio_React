    import foto from '../../assets/images/foto.png'
    import foto1 from '../../assets/images/foto1.png'
    import { useState } from 'react'
    import { FaDownload, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
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
            
            <div className='Perfil'>
                <img src = {perfil} alt="foto" className='fotoPerfil'/>
                <button onClick={cambioPerfil} className='btn_cambiar'><FaArrowLeft style={{ marginRight: '5px' }}/>Cambiar Foto<FaArrowRight style={{ marginLeft: '5px' }}/></button>
            </div>
        
        );
    }
    export const Aboutme =()=>{
        const handleDownload = () => {
            window.open("../../../public/Documents/CV_ADRIAN_OBANDO_GUAMAN.pdf", "_blank");
        };

        return(
        
            <div className='Contenido'> 
            <div className='Texto'>
            <div className='Title'>
                <h1>SOBRE MI</h1>
            </div>
                <h2 style={{ color: 'rgb(0, 122, 204)'}} >Hola! soy</h2>
                <h1 style={{ color: 'white'}} >Adrian Obando <span style={{color:'orange'}}>Guaman</span> </h1>
                <h3>un desarrollador web</h3>
                <p style={{color:'white'}}> Soy ingeniero de sistemas, con más de 4 año de experiencia en tecnologías
                de la información, he colaborado a empresas e instituciones como
                Farmaelias, HeavenSoft, UMSS, AGETIC, busco una oportunidad para aportar
                mis habilidades y crecer profesionalmente en la empresa convertirme
                experto en desarrollo de software. Me apasiona la tecnología, me gusta la
                innovación y los retos.</p>
                <div className='descargaCv'>
                <button className='btn-descarga' onClick={handleDownload}>Descargar CV <FaDownload/> </button>
                </div>
                </div>
            <Perfil/>
            </div>
        );
    }
