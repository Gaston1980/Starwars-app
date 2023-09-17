import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './carddetails.module.css';
import { getCharacterDetails, cleanCharacterState } from "../actions";


export default function CardDetails() {
const {id} = useParams(); 
const dispatch = useDispatch();

const detalles = useSelector(state => state.character)

useEffect(()=>{ //ComponentDidMount
dispatch(getCharacterDetails(id)); 
},[])


useEffect(()=>{//ComponentDidUnmount
dispatch(cleanCharacterState());
},[])


 
 
    
    return (
      <>
        <div className={styles.stars}></div>
        <div className={styles.twinkling}></div>
        <div className={styles.divNav}>
            <img src="https://res.cloudinary.com/dyycj9vam/image/upload/v1689788897/Star_Wars_Logo.svg_viijwq.png"  alt="logoStarwars"/>  
        </div>
        <div className={styles.divSpan}>
            <Link to="/"style={{textDecoration:"none"}} >
                <span className={styles.span}>H O M E</span>
            </Link>
        <span className={styles.span}>/</span>
        <Link to="/characters"style={{textDecoration:"none"}} >
            <span className={styles.span}>C H A R A C T E R S</span>
        </Link>
        <span className={styles.span}>/</span>
        <span className={styles.spanName}>{detalles.name}</span>
        </div>
            <div className={styles.divMainCard}>
            <div>
                <img className={styles.CharacterImg}  src={detalles.img} alt="characterImg"/>
            </div>
        <div className={styles.divCard}>
           <h3 className={styles.h3}>{detalles.name}</h3>
           <p className={styles.p}>Height: {detalles.height}</p> 
           <p className={styles.p}>ID: {detalles._id}</p> 
           <p className={styles.p}>Mass: {detalles.mass}</p> 
           <p className={styles.p}>Hair Color: {detalles.hair_color}</p> 
           <p className={styles.p}>Skin Color: {detalles.skin_color}</p>
           <p className={styles.p}>Eye Color: {detalles.eye_color}</p> 
           <p className={styles.p}>Birth Eyear: {detalles.birth_year}</p>
           <p className={styles.p}>Gender: {detalles.gender}</p> 
           <span className={styles.p}>Homeworld:</span>
           <Link to={`/planets/${detalles.homeworldId}`} style={{textDecoration:"none"}}>
            <span className={styles.spanHomeworld}> {detalles.homeworld}</span> 
           </Link> 
           </div>
           </div>
           <div className={styles.MaindivFilms}>
            <div className={styles.divPfilm}>
            <p className={styles.pFilm}>Related Films:</p>
            </div>
           <div className={styles.divFilms}>
                {detalles.films?.map((film)=> (
            <div className={styles.divMap} key={film._id}>
                <img className={styles.imgfilms}src={film.img} alt="FilmImg"></img>
                <Link to={`/films/${film._id}`} style={{textDecoration:"none"}}>
                    <p className={styles.pFilms}>{film.title}</p>
                </Link>
            </div>   
           ))}
          </div>
        </div>
          
    </>
        );
      }

