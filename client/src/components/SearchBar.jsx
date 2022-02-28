import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogame } from "../actions";

export function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchVideogame(input));
    console.log(input);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e) => setInput(e.target.value)}/>
      <button onClick={(e)=>{handleSearch(e)}}>Search</button>
      <hr></hr>
    </div>
  );
}

export default SearchBar;
