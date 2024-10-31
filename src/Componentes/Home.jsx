import foto from '../assets/images/Foto2.png'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import  './Home.css'
export const Home=()=>{
    return(
        <div className='fondo'>
            <div className='Card'>
            <div className='Foto'>
               <img src= {foto} alt="foto" className='MiFoto' />
            </div>
             <div className='Name'>
               <h1>ADRIAN OBANDO GUAMAN</h1>
               <h3>Ingeniero de Sistemas</h3>
             </div>
             <div className="social-links">
                   <a href="https://www.facebook.com/adrianobando.guaman" target="_blank" rel="noopener noreferrer">
                     <FaFacebook />
                   </a>
                   <a href="https://www.linkedin.com/in/adrian-obando-guaman" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin />
                   </a>
                   <a href="https://www.instagram.com/adrianobandog" target="_blank" rel="noopener noreferrer">
                     <FaInstagram />
                   </a>
              </div>
            </div>
            
       </div>
    
    )
}