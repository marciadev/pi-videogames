import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../actions";

export function SearchBar() {

    const [input, setInput] = useState('')  
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getVideogames(input))
    },[])
    
    const handleChange = (e) => {
        setInput(e);
    } 

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideogames(input))
    setInput('');
    }
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e)=>handleChange(e.target.value)}/>
      <button onSubmit={(e)=>handleSubmit(e)}>Search</button>
      <hr></hr>
    </div>
  );
}

export default SearchBar;
