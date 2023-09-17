/* eslint-disable react/prop-types */
import styles from "./filmcard.module.css";
import { Link } from 'react-router-dom';


export default function Filmcard (props) { 
   
   return (
        <>
        <div className={styles.divCard}> 
          <Link to={`/films/${props.id}`} style={{textDecoration:"none"}}>
            <h3 className={styles.h3}>{props.title}</h3>
          </Link>
          <div className={styles.DivFilmImg}>
            <img className={styles.FilmImg} src={props.img} alt="filmImg"/>
          </div>
        </div>
         </>
        );
    }

  