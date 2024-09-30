import { Link } from 'react-router-dom'
import './Header.css'
export const Header = (props)=>{
    return(
        <header>
         <nav>
        <ul className="nav-list">
        <li><Link to="/">{props.about}</Link></li>
        <li><Link to="/">{props.proyectos}</Link></li>
        <li><Link to="/Educacion">{props.educacion}</Link></li>
        <li><Link to="/">{props.habilidades}</Link></li>
        <li><Link to="/Contactame">{props.contacto}</Link></li>
        </ul>
      </nav>
    </header>
    )
   
}
