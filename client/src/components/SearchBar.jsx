import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogame } from "../actions";
import styles from '../styles/SearchBar.module.css'

export function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchVideogame(input));
    console.log(input);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e) => setInput(e.target.value)} className={styles.input}/>
      <button onClick={(e)=>{handleSearch(e)}} className={styles.searchButton}>Search</button>
    </div>
  );
}

export default SearchBar;
