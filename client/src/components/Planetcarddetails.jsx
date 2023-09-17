import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './planetcarddetails.module.css';
import { getPlanetDetails, cleanPlanetState } from "../actions";


export default function Planetcarddetails() {
const {id} = useParams(); 
const dispatch = useDispatch();

const detalles = useSelector(state => state.planet)

useEffect(()=>{ //ComponentDidMount
dispatch(getPlanetDetails(id)); 
},[])


useEffect(()=>{//ComponentDidUnmount
dispatch(cleanPlanetState());
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
            <Link to="/planets"style={{textDecoration:"none"}} >
                <span className={styles.span}>P L A N E T S</span>
            </Link>
            <span className={styles.span}>/</span>
            <span className={styles.spanName}>{detalles.name}</span>
        </div>
        <div className={styles.divMainCard} >
            <div>
                <img className={styles.PlanetImg} src={detalles.img} alt="planetImg"/>
            </div>
            <div className={styles.divCard}>
                <h3 className={styles.h3}>{detalles.name}</h3>
                <p className={styles.p}>Rotation period: {detalles.rotation_period}</p> 
                <p className={styles.p}>Orbital period: {detalles.orbital_period}</p> 
                <p className={styles.p}>Diameter: {detalles.diameter}</p> 
                <p className={styles.p}>Climate: {detalles.climate}</p> 
                <p className={styles.p}>Gravity: {detalles.gravity}</p>
                <p className={styles.p}>Terrain: {detalles.terrain}</p> 
                <p className={styles.p}>Surface water: {detalles.surface_water}</p>
            </div>
        </div>
        <div className={styles.MaindivResidents}>
            <div className={styles.divP}>
                <p className={styles.pFilm}>Residents:</p> 
            </div>
            <div className={styles.divResidents}>
                {detalles.residents?.map((resident)=> (
                    <div className={styles.divMapResident} key={resident._id}>
                        <img className={styles.imgResidents}src={resident.img} alt="FilmImg"></img>
                    <Link to={`/characters/${resident._id}`} style={{textDecoration:"none"}}>
                        <p className={styles.pFilms}>{resident.name}</p>
                    </Link>
                    </div>   
        ))}
            </div>
        </div>
        <div className={styles.MaindivFilms}>
            <div className={styles.divPfilm}>
                <p className={styles.pFilm}>Related films:</p>
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
