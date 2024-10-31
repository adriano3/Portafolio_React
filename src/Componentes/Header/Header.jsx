import { Link } from 'react-scroll';
import './Header.css';

export const Header = (props) => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li><Link to="home" smooth={true} duration={500}>{props.home}</Link></li>
          <li><Link to="aboutme" smooth={true} duration={500}>{props.about}</Link></li>
          <li><Link to="proyectos" smooth={true} duration={500}>{props.proyectos}</Link></li>
          <li><Link to="educacion" smooth={true} duration={500}>{props.educacion}</Link></li>
          <li><Link to="habilidades" smooth={true} duration={500}>{props.habilidades}</Link></li>
          <li><Link to="contactame" smooth={true} duration={500}>{props.contacto}</Link></li>
        </ul>
      </nav>
    </header>
  );
};
