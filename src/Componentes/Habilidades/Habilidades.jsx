
import './Habilidades.css';
const skills = [
    { category: 'Technical Skills', items: [
      { name: 'Javascript', level: '50%' },
      { name: 'HTML & CSS', level: '80%' },
      { name: 'Photoshop', level: '30%' },
      { name: 'Wordpress', level: '40%' },
      { name: 'ASP.NET core', level: '70%' },
      { name: 'React', level: '40%' },
      { name: 'Laravel', level: '55%' },
      { name: 'Angular', level: '40%' }
      
    ]},
    { category: 'Professional Skills', items: [
      { name: 'Comunicación', level: '80%' },
      { name: 'Trabajo en Equipo', level: '70%' },
      { name: 'Creatividad', level: '90%' },
      { name: 'Dedicación', level: '85%' },
      { name: 'Proyect Management', level: '70%' }
    ]}
  ];
export const Habilidades= ()=>{
    return (  
      <div className='habilidades'>
        <div className="container">
          {skills.map((section) => (
            <div className="skills-section" key={section.category}>
              <h2>{section.category}</h2>
              {section.items.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
      );
}