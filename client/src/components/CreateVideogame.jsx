import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../actions";
import axios from "axios";
import Select from "react-select";
import { Link, useHistory } from "react-router-dom";

export function CreateVideogame() {
  const history = useHistory();
  const dispatch = useDispatch();
  const stateGenre = useSelector((state) => state.genres);
  const platforms = ["PC", "PlayStation 3", "PlayStation 4", "PlayStation 5", "macOS", "Linux", "Xbox360", "Android", "Nintendo Switch", "iOS", "Xbox One", "Xbox Series S/X"]
  
  const [newVideogame, setNewVideogame] = useState({
    name: "",
    releaseDate: "",
    rating: "",
    imageUrl: "",
    description: "",
    platforms: "",
    genres: [],
  });

  const [platform, setPlatform] = useState([])

  const options = platforms.map((pf) => {
    return {
      value: pf,
      label: pf,
    };
  });

  const genreOptions = stateGenre.length > 0 && stateGenre.map((g)=> {
    return {
      value: g.id,
      label: g.name
    }
  })

  const setPlatforms = () =>{
    let pf = '';
    platform.map(p=>{
      return pf.length === 0 ? pf += p.label : pf += ', ' + p.label 
    })
    setNewVideogame({
      ...newVideogame,
      platforms: pf
    })
  }

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPlatforms();
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

  const handleChoice = (options) => {
    setPlatform(options)
  };

  const handleSelect = (e) => {
    setNewVideogame((newVideogame)=>({
      ...newVideogame,
      genres: [...newVideogame.genres, e.value],
    }));
    console.log(newVideogame)
  };

  return (
    <div>
      <Link to='/home'><button>Back</button></Link>
      <h1>Create your own Videogame</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
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
        <Select isMulti options={options} onChange={(e)=>{handleChoice(e)}}/>
        </div>
        <div>
        <label>Genres:</label>
        <Select isMulti options={genreOptions} onChange={(e)=>{handleSelect(e)}}/>
        </div>
        {/* <div>
        <select onChange={(e)=>handleSelect(e)}>
          {stateGenre.length > 0 &&
            stateGenre.map((gen) => {
            return <option key={gen.id} value={gen.id}>{gen.name}</option>
            })}
        </select>
        {newVideogame.genres.map((g, index)=> <div key={index}><span>{g}</span><button>X</button></div>)}
        </div> */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateVideogame;
