import '../Proyectos/Proyectos.css'
import imagen_code from '../../assets/images/proyectos/code_tag.webp'
import img_havensoft from '../../assets/images/proyectos/havensoft.png'
import img_KUSA from '../../assets/images/proyectos/KUSA.png'
import img_vensoft from '../../assets/images/proyectos/S_Vensoft.png'

import { FaGithub } from 'react-icons/fa'

export const Proyecto = ({ img1, img2, title, description, githubLink }) => {
   return (
     <div className="proyecto">
       <img src={img1} alt="" className='img_code' />
       <img src={img2} alt="" className='img_proyect' />
       <p><span style={{ fontWeight: 'bold' }}>{title}</span> {description}</p>
       <a href={githubLink} target="_blank" rel="noreferrer"><FaGithub /></a>
     </div>
   );
 };
 export const Proyectos = () => {
   return (
     <>
       <div className="Titulo">
         <h1>Proyectos <span style={{ color: 'blue' }}>destacados</span></h1>
       </div>
       <div className="proyectos">
         <Proyecto
           img1={imagen_code}
           img2={img_havensoft}
           title="Soft-ecommerce"
           description="Se trata de un proyecto de sistema de ventas aplicando angular y laravel para poder realizar las compras por una plataforma e-comerce"
           githubLink="https://github.com/editook/ventas-app-angular"
         />
         <Proyecto
           img1={imagen_code}
           img2={img_KUSA}
           title="Aplicacion Movil KUSA"
           description="Es una apicacion de ventas en Flutter para android y iOS que permite ofrecer a los vendores su productos mendiante la aplicacion y a los compradores poder realizar las compras enlinea"
           githubLink="https://github.com/editook/otro-proyecto"
         />
         <Proyecto
           img1={imagen_code}
           img2={img_vensoft}
           title="Vensoft"
           description="Es un sistema de registro de perfiles de proyecto de Grado en la Universidad Mayor de San Simon; esta realizado usando framework de laravel "
           githubLink="https://github.com/editook/otro-proyecto-mas"
         />
       </div>
     </>
   );
 };

