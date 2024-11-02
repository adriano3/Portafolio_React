import diplomado from '../../assets/images/diplomado.png'
import licenciatura from '../../assets/images/Licenciatura.png'
import './Educacion.css'

export const Items_Educacion= (props)=>{
    return(
        <div className='educacion'>
            <div className='items'>
             <div className='foto'>
                <img src= {props.foto} alt="" />
             </div>
            <div>
                <h1>{props.titulo}</h1>
                <h2>{props.institucion}</h2>
                <p>{props.anio}</p>
                <p>{props.descripcion}</p>
            </div>
            </div>
            <hr />
        </div>
        
    )
}
export const Educacion=()=>{
    return(  
    <>
    <Items_Educacion foto = {diplomado}
     titulo={"DIPLOMADO EN SEGURIDAD DE TECNOLOGIAS DE INFORMACION EN ENTORNOS VIRTUALES Y FISCOS"}
    institucion={"UNIVERSIDAD MAYOR DE SAN SIMON"} 
    anio={2021} 
    descripcion={ `Ingrese al diplomado con el objetico de poder crecer mis conociientos
        en el area de seguridad informatica ya es hoy en dia hay muchas ciberdelicientes 
        y cualquier profesional del area de sitemas - informatica es de suma importancia
        poder saber`} />

        <Items_Educacion foto = {licenciatura}
     titulo={"LICENCIATURA EN INGENERIA DE SISTEMAS"}
    institucion={"UNIVERSIDAD MAYOR DE SAN SIMON"} 
    anio={2019} 
    descripcion={ `Realmente para mi fue muy impactante poder ingresar a esta carrera  de Ing. Sistemas, dia a dia luche para 
    poder cumplir mi objetivo pricipal de formarme como profesional y tularme de esta carrera por ello agradezco a mis 
    Docentes y Compañeros que estaban en este proceso.`} />
    </>
    )
}
