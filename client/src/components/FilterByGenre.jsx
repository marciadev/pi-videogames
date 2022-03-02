import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getByGenre } from "../actions";
import styles from '../styles/Home.module.css'

export default function FilterByGenre() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(getByGenre(e.target.value))
  };

  return (
    <div>
        <select className={styles.selectors} onChange={(e)=>{handleChange(e)}}>
        <option disabled selected>Choose a genre...</option>
          {allGenres.map((op,i)=>{
            return <option value={op.name} key={i}>{op.name}</option>
          })}
        </select>
    </div>
  )
}
