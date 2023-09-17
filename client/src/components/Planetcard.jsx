/* eslint-disable react/prop-types */
import styles from "./planetcard.module.css";
import { Link } from 'react-router-dom';


export default function Planetcard (props) { 
   
   return (
      <div className={styles.divCard}> 
        <Link to={`/planets/${props.id}`} style={{textDecoration:"none"}}>
          <h3 className={styles.h3}>{props.name}</h3>
        </Link>
        <div className={styles.DivPlanetImg}>
          <img className={styles.PlanetImg} src={props.img} alt="planetImg"/>
        </div>
      </div>
        );
    }