import React from "react";
import styles from '../styles/Home.module.css'
import Sound from "./Sound";


export default function Header(){

    return (
        <nav className={styles.navBar}>
            <h1 className={styles.title}>The Videogames Cave</h1><Sound/>
        </nav>
    )
}