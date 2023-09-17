/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import styles from "./planetscards.module.css"
import Planetcard from "./Planetcard";
import  {Paginacion}  from './Paginacion';
import { getAllPlanets } from '../actions';
import { connect, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"

export  function Planetscards(props) {
    
const dispatch = useDispatch();
    
useEffect(() => {  
dispatch(getAllPlanets());
},[dispatch]) 
            
const [pagina, setPagina] = useState (1);
const [porPagina, setPorPagina] = useState (8);
    
const cardsArray = props.planets;
const maximo = Math.ceil(cardsArray.length / porPagina);
    



// eslint-disable-next-line react/prop-types
if(props.planets) {  
    return (
        <>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <Link to="/"style={{textDecoration:"none"}} >
                <span className={styles.spanHome}>H O M E</span>
            </Link>
            <span className={styles.spanBarra}>/ </span>
            <span className={styles.span}>P L A N E T S </span>
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
            <div className={styles.divPlanetCards}>
                {props.planets?.slice (  //0,12 //recorta el array de a 12 cards
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                    ).map(planet =>
                        <Planetcard
                            key={planet._id}// cada elemento debe tener su key unica
                            id={planet._id}
                            name={planet.name}
                            img={planet.img} 
                        />
                    ) } 
            </div>
        </>
    )}
else {
    return (
        <p>No se econtraron Planets</p>
    )
}} 
    
// eslint-disable-next-line react-refresh/only-export-components
export const mapStateToProps = function(state) {
    return {
        planets: state.planetsrenderizado
      }
    }

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, null)(Planetscards);

