/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./cards.module.css"
import Card from "./Card.jsx";
import {Paginacion}  from './Paginacion.jsx';
import { getAllCharacters } from '../actions';
import { connect, useDispatch } from 'react-redux';


export  function Cards(props) {
    
const dispatch = useDispatch();
    
useEffect(() => {  
dispatch(getAllCharacters());
},[dispatch]) 
            
const [pagina, setPagina] = useState (1);
const [porPagina, setPorPagina] = useState (8);
    
const cardsArray = props.characters;
const maximo = Math.ceil(cardsArray.length / porPagina); // defino el maximo de paginas


if(props.characters) {  
    return (
        <>
        <div className={styles.stars}></div>
        <div className={styles.twinkling}></div>
        <Link to="/"style={{textDecoration:"none"}} >
        <span className={styles.spanHome}>H O M E</span>
        </Link>
        <span className={styles.spanBarra}>/ </span>
        <span className={styles.span}>C H A R A C T E R S </span>
        
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        <div className={styles.divCards}>
            {props.characters?.slice (  //0,8 //recorta el array de a 8 cards
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                )
                .map(character =>
                    <Card
                        key={character._id}
                        id={character._id}
                        name={character.name}
                        img={character.img} 
                    />
                    )} 
        </div>
        </>
    )}
else {
    return (
        <p>No se econtraron Characters</p>
    )
}} 
    
// eslint-disable-next-line react-refresh/only-export-components
export const mapStateToProps = function(state) {
    return {
        characters: state.characterrenderizado
      }
    }

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, null)(Cards);

