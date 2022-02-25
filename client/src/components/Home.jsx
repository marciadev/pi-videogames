import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardVideogame } from "./CardVideogame";
import FilterByGenre from "./FilterByGenre";
import { filteredCreated, getVideogames, orderedByName, orderedByRating } from "../actions";
import Nav from "./Nav";

export function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.filtered);
  const [orden, setOrden] = useState('')

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(getVideogames(e));
  };

  const handleSelect = (e) => {
    dispatch(filteredCreated(e.target.value));
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
      <h1>The Videogames'Corner</h1>
      <Nav handleClick={handleClick}/>
      <div>
      <label>Filter by genre</label>
      <FilterByGenre />
      </div>
      <div>
        <div>
        <label>Show by origin</label>
        <select onChange={handleSelect}>
          <option value="all"> All </option>
          <option value="created"> Created </option>
          <option value="api"> Existing </option>
        </select>
        </div>
        <div>
        <label>Sort alphabetically</label>
          <select onChange={(e)=>{handleSort(e)}}>
            <option value="asc"> A-Z</option>
            <option value="desc"> Z-A </option>
          </select>
        </div>
        <div>
        <label>Sort by rating</label>
          <select onChange={(e)=>{handleOrder(e)}}>
            <option value="asc"> Ascendent </option>
            <option value="desc"> Descendent </option>
          </select>
        </div>
        {allVideogames.length > 0 ? (
          allVideogames.map((vg, index) => {
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
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
