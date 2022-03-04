import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardVideogame } from "./CardVideogame";
import FilterByGenre from "./FilterByGenre";
import { getVideogames, orderedByName, orderedByRating } from "../actions";
import Nav from "./Nav";
import Pagination from "./Pagination";
import styles from '../styles/Home.module.css'
import Loader from "./Loader";
import OriginSelector from "./OriginSelector";

export function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.filtered);
  
  const [orden, setOrden] = useState('')

  const values = ["A-Z", "Z-A"]

  const valuesRating = ["Ascendent", "Descendent"]

  const [currentPage, setCurrentPage] = useState(1)
  const [vgsPerPage] = useState(15)

  const lastVg = currentPage * vgsPerPage
  const firstVg = lastVg - vgsPerPage
  const currentVg = allVideogames.slice(firstVg, lastVg)

  const paginate = page => setCurrentPage(page)

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(getVideogames(e));
  };

  const handleSort = (e) => {
    dispatch(orderedByName(e.target.value));
    setOrden(`Ordenado${e.target.value}`)
  }

  const handleOrder = (e) => {
    dispatch(orderedByRating(e.target.value));
    setOrden(`Ordenado${e.target.value}`)
  }

  return (
    <div>
      <h1 className={styles.title}>The Videogames Cave</h1>
      <Nav handleClick={handleClick}/>
      <div className={styles.filters}>
        <div>
      <label className={styles.subtitles}>Filter by genre</label>
      <FilterByGenre />
      </div>
        <div>
        <label className={styles.subtitles}>Show by origin</label>
        <OriginSelector/>
        </div>
        <div>
        <label className={styles.subtitles}>Sort alphabetically</label>
        <select className={styles.selectors} onChange={(e)=>{handleSort(e)}}>{values.map((op,i)=>{
           return <option value={op} key={i}>{op}</option>})}
          </select>
        </div>
        <div>
        <label className={styles.subtitles}>Sort by rating</label>
        <select className={styles.selectors} onChange={(e)=>{handleOrder(e)}}>{valuesRating.map((op,i)=>{
            return <option value={op} key={i}>{op}</option> })}
          </select>
        </div>
      </div>
        <Pagination vgsPerPage={vgsPerPage} totalVgs={allVideogames.length} paginate={paginate}/>
        <div className={styles.cards}>
        {currentVg.length > 0 ? (
          currentVg.map((vg, index) => {
            return (
              <div key={index}>
                <CardVideogame
                  id={vg.id}
                  name={vg.name}
                  imageUrl={vg.imageUrl}
                  genres={vg.genres}
                />
              </div>
            );
          })
        ) : (
        <Loader/>
        )}
      </div>
    </div>
  );
}

export default Home;
