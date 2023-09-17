/* eslint-disable react/prop-types */
import {useEffect} from 'react';
import styles from "./filmscards.module.css"
import Filmcard from "./Filmcard";
import { getAllFilms } from '../actions';
import { connect, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"


export  function Filmscards(props) {
    
const dispatch = useDispatch();
    
useEffect(() => {  
dispatch(getAllFilms());
},[dispatch]) 
            

    



// eslint-disable-next-line react/prop-types
if(props.films) {  
    return (
        <>
        <div className={styles.stars}></div>
        <div className={styles.twinkling}></div>
        <div>
            <Link to="/"style={{textDecoration:"none"}} >
                <span className={styles.spanHome}>H O M E</span>
            </Link>
            <span className={styles.spanBarra}>/ </span>
            <span className={styles.span}>F I L M S </span>
        </div>
        <div className={styles.divFilmCards}>
          {props.films?.map(film =>
            <Filmcard
                key={film._id}
                id={film._id}
                title={film.title}
                img={film.img} 
            />
        )} 
        </div>
        </>
    )}
else {
    return (
        <p>No se econtraron Films</p>
    )
}} 
    
// eslint-disable-next-line react-refresh/only-export-components
export const mapStateToProps = function(state) {
    return {
        films: state.filmsrenderizado
      }
    }

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, null)(Filmscards);

