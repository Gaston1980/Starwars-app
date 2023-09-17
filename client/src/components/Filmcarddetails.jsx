import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './filmcarddetails.module.css';
import { getFilmDetails, cleanFilmState } from "../actions";


export default function Filmcarddetails() {
const {id} = useParams(); 
const dispatch = useDispatch();

const detalles = useSelector(state => state.film)

useEffect(()=>{ //ComponentDidMount
dispatch(getFilmDetails(id)); 
},[])


useEffect(()=>{//ComponentDidUnmount
dispatch(cleanFilmState());
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
            <Link to="/films"style={{textDecoration:"none"}} >
                <span className={styles.span}>F I L M S</span>
            </Link>
            <span className={styles.span}>/</span>
            <span className={styles.spanName}>{detalles.title}</span>
        </div>
        <div className={styles.divMainCard} >
            <div>
                <img className={styles.FilmImg} src={detalles.img} alt="FilmImg"/> 
            </div>
            <div className={styles.divCard}>
                <h3 className={styles.h3}>{detalles.title}</h3>
                <p className={styles.p}>Release date: {detalles.release_date}</p> 
                <p className={styles.p}>Director: {detalles.director}</p> 
                <p className={styles.p}>Producer: {detalles.producer}</p> 
                <p className={styles.p}>Opening crawl:  <i>{detalles.opening_crawl}</i></p> 
            </div>
        </div>
        <div className={styles.MaindivResidents}>
            <div className={styles.divP}>
                <p className={styles.pPlanet}>Characters:</p>
            </div>
            <div className={styles.divResidents}>
                {detalles.characters?.map((character)=> (
                <div className={styles.divMapResident} key={character._id}>
                    <img className={styles.imgResidents}src={character.img} alt="ResidentImg"></img>
                    <Link to={`/characters/${character._id}`} style={{textDecoration:"none"}}>
                        <p className={styles.pPlanets}>{character.name}</p>
                    </Link>
                </div>   
           ))}
            </div>
        </div>
        <div className={styles.MaindivPlanets}>
        <div className={styles.divPplanets}>
           <p className={styles.pPlanet}>Related planets:</p>
        </div>
        <div className={styles.divPlanets}>
            {detalles.planets?.map((planet)=> (
            <div className={styles.divMap} key={planet._id}>
                <img className={styles.imgplanets}src={planet.img} alt="PlanetImg"></img>
                <Link to={`/planets/${planet._id}`} style={{textDecoration:"none"}}>
                    <p className={styles.pPlanets}>{planet.name}</p>
                </Link>
            </div>   
           ))}
        </div>
        </div>
        </>
          );}

