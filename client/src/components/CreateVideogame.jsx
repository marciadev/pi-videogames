import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../actions";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

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
    platforms: "",
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/videogame/create", newVideogame)
    alert("Your game was created successfully!");
    setNewVideogame({
      name: "",
      releaseDate: "",
      rating: "",
      imageUrl: "",
      description: "",
      platforms: "",
      genres: [],
    })
    history.push("/home");
  };

  const handleChange = (e) => {
    setNewVideogame({
      ...newVideogame,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setNewVideogame((newVideogame)=>({
      ...newVideogame,
      genres: [...newVideogame.genres, e.target.value],
    }));
    console.log(newVideogame)
  };

  return (
    <div>
      <Link to='/home'><button>Back</button></Link>
      <h1>Create your own Videogame</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
        <input name="name" value={newVideogame.name} onChange={handleChange} />
        </div>
        <div>
        <label>Release Date:</label>
        <input
          name="releaseDate"
          value={newVideogame.releaseDate}
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Rating:</label>
        <input
          name="rating"
          value={newVideogame.rating}
          onChange={handleChange}
        />
        </div>
        <div>
        <label>ImageURL:</label>
        <input
          name="imageUrl"
          value={newVideogame.imageUrl}
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Description:</label>
        <input
          name="description"
          value={newVideogame.description}
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Platforms:</label>
        <input
          name="platforms"
          value={newVideogame.platforms}
          onChange={handleChange}
        />
        </div>
        <div>
        <select onChange={(e)=>handleSelect(e)}>
          {stateGenre.length > 0 &&
            stateGenre.map((gen) => {
            return <option key={gen.id} value={gen.id}>{gen.name}</option>
            })}
        </select>
        <ul>{newVideogame.genres.map((g, index)=> <li key={index}>{g + ", "}</li>)}</ul>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateVideogame;
