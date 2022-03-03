import React from "react";
import styles from '../styles/Loader.module.css'
import loader from "../resources/images/street17.gif"

export function Loader (){
    return(
        <div>
            <img src={loader} alt='loading...' width="500px" />
            <h2 className={styles.loader}>LOADING...</h2>
        </div>
    )
}
export default Loader;