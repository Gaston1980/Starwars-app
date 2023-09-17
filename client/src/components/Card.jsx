/* eslint-disable react/prop-types */

import styles from "./card.module.css";
import { Link } from 'react-router-dom';


export default function Card (props) { 
   
   return (

        <div className={styles.divCard}> 
          <Link to={`/characters/${props.id}`} style={{textDecoration:"none"}}>
              <h3 className={styles.h3}>{props.name}</h3>
          </Link>
          <div className={styles.divCardImg}>
            <img className={styles.CardImg} src={props.img} alt="characterImg"/>
          </div>
        </div>
        );
    }

  