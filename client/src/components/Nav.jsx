import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export function Nav({handleClick}) {
  return (
    <nav>
      <SearchBar />
      <Link to="/create"><button onClick={(e) => {handleClick(e)}}>Create Videogame</button></Link>
      <button onClick={(e) => {handleClick(e)}}>Reload videogames</button>
    </nav>
  );
}

export default Nav;
