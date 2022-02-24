import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardVideogame } from "./CardVideogame";
import FilterByGenre from "./FilterByGenre";
import { getVideogames } from "../actions";
import SearchBar from "./SearchBar";
import Order from "./Order";

export function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.filtered);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(getVideogames(e));
  };
 

  return (
    <div>
      <SearchBar />
      <Link to="/create"> Create Videogame </Link>
      <h1>The Videogames'Corner</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload videogames
      </button>
      <FilterByGenre/>
      <div>
        <Order/>
        <select>
          <option value="all"> All </option>
          <option value="created"> Created </option>
          <option value="api"> Existing </option>
        </select>
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
