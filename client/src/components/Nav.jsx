import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from '../styles/Nav.module.css'

export function Nav({handleClick}) {
  return (
    <nav className={styles.container}>
      <SearchBar />
      <Link to="/create"><button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Create Videogame</button></Link>
      <button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Reload videogames</button>
    </nav>
  );
}

export default Nav;
