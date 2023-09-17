import styles from "./home.module.css"
import {Link} from "react-router-dom"
import {FaGithub,FaLinkedin} from "react-icons/fa"

export default function Home () {
    return (
        <div>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div className={styles.home}>
                <header className={styles.header}>
                    <img src="https://res.cloudinary.com/dyycj9vam/image/upload/v1689788897/Star_Wars_Logo.svg_viijwq.png"  alt="logoStarwars"/> 
                </header>
                <div className={styles.divImg}>
                    <div className={styles.divCha}> 
                        <Link to="/characters" style={{textDecoration:"none"}}>
                            <p>Characters</p>
                            <div className={styles.divImgEffect} >  
                            <img src="https://res.cloudinary.com/dyycj9vam/image/upload/v1690409958/characters_x3i3vw.webp" alt="Characters"/>
                            </div>
                        </Link>
                    </div>
                <div className={styles.divPlanets}>
                    <Link to="/planets" style={{textDecoration:"none"}}>
                        <p>Planets</p>
                        <div className={styles.divImgEffect} >
                        <img src="https://res.cloudinary.com/dyycj9vam/image/upload/v1690401669/Planets_njdmds.jpg" alt="Planets"/>
                        </div>
                    </Link>
                </div>
                <div className={styles.divFilms}>
                    <Link to="/films"style={{textDecoration:"none"}}>
                        <p>Films</p>
                        <div className={styles.divImgEffect} >
                        <img src="https://res.cloudinary.com/dyycj9vam/image/upload/v1690402256/Films_img_fn2fif.jpg" alt="Films"/>
                        </div>
                    </Link>
                </div>
                </div>
            </div>
                <div className={styles.Mainfooter}>
                    <div className={styles.footer}>
                        <p className={styles.footerp1}>Star Wars Visual Guide app by Gaston Frissiones 2023 
                        <a className={styles.aIcons} href="https://www.linkedin.com/in/gaston-frissiones" target="blank"><FaLinkedin/></a>
                        <a className={styles.aIcons} href="https://www.github.com/Gaston1980" target="blank"><FaGithub/></a>
                        </p>
                        <p className={styles.footerp2}>Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia.</p>
                    </div>
                </div>
        </div>
    )
}