import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../actions";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function CreateVideogame() {
  const history = useHistory();
  const dispatch = useDispatch();
  const stateGenre = useSelector((state) => state.genres);

  const [newVideogame, setNewVideogame] = useState({
    name: "",
    releaseDate: "",
    rating: "",
    imageUrl: "",
    description: "",
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/videogame/create", newVideogame)
    alert("Your game was created successfully!");
    history.push("/home");
  };

  const handleChange = (e) => {
    setNewVideogame({
      ...newVideogame,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setNewVideogame({
      ...newVideogame,
      genres: [...newVideogame.genres, e.target.value],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={newVideogame.name} onChange={handleChange} />
        <label>Release Date:</label>
        <input
          name="releaseDate"
          value={newVideogame.releaseDate}
          onChange={handleChange}
        />
        <label>Rating:</label>
        <input
          name="rating"
          value={newVideogame.rating}
          onChange={handleChange}
        />
        <label>ImageURL:</label>
        <input
          name="imageUrl"
          value={newVideogame.imageUrl}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          name="description"
          value={newVideogame.description}
          onChange={handleChange}
        />
        <label>Platforms:</label>
        <input
          name="platforms"
          value={newVideogame.platforms}
          onChange={handleChange}
        />
        <select onChange={handleSelect}>
          {stateGenre.length > 0 &&
            stateGenre.map((gen) => {
              return (
                <option key={gen.id} id={gen.id}>
                  {gen.name}
                </option>
              );
            })}
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateVideogame;
