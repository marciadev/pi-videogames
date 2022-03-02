import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../actions";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from '../styles/Create.module.css'

export function validate(newVideogame) {

  let errors = {};

  if (!newVideogame.name) {
    errors.name = "Introduce a name";
  } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(newVideogame.name)){
    errors.name = "Invalid name";
  }
  if (!newVideogame.rating || newVideogame.rating > 5){
   errors.rating = "Rating must be a number between 0-5"
  }
  if (!newVideogame.imageUrl){
    errors.imageUrl = "Introduce an image in format .jpg, .jpeg or .png"
  }
  if (!newVideogame.description){
    errors.description = "Describe your videogame"
  }
  if(newVideogame.platforms.length === 0) {
    errors.platforms = "Choose the platforms"
  }
  if(!newVideogame.genres.length) {
    errors.genres = "Choose the genres"
  }
  return errors;
}

export function CreateVideogame() {
  const history = useHistory();
  const dispatch = useDispatch();
  const stateGenre = useSelector((state) => state.genres);
  const platformsArr = ["PC", "PlayStation 3", "PlayStation 4", "PlayStation 5", "macOS", "Linux", "Xbox360", "Android", "Nintendo Switch", "iOS", "Xbox One", "Xbox Series S/X"]
  
  const [errors, setErrors] = useState({})

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
    setNewVideogame({
      name: "",
      releaseDate: "",
      rating: "",
      imageUrl: "",
      description: "",
      platforms: "",
      genres: [],
    })
    await axios.post("http://localhost:3001/videogame/create", newVideogame)
    alert("Your videogame was created successfully!");
    history.push("/home");
  };

  const handleChange = (e) => {
    setNewVideogame({
      ...newVideogame,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...newVideogame,
      [e.target.name] : e.target.value
    }))
  };

  const handleSelect = (e) => {
    setNewVideogame({
      ...newVideogame,
      genres: newVideogame.genres.includes(e.target.value) ? newVideogame.genres : newVideogame.genres, ...newVideogame.genres.push(e.target.value),
    });
    setErrors(validate({
      ...newVideogame,
      genres : newVideogame.genres
    }))
  };
  
  const handleChoice = (op) => {
    setNewVideogame({
      ...newVideogame,
      platforms: !newVideogame.platforms.includes(op.target.value) ? newVideogame.platforms.concat(newVideogame.platforms.length > 0 ? ", " + op.target.value : op.target.value) : newVideogame.platforms
    })
    setErrors(validate({
      ...newVideogame,
      platforms : op.target.value
    }))
  };

  const handleResetPlatforms = (e) => {
    e.preventDefault()
    setNewVideogame({
      ...newVideogame,
      platforms: ''
    })
  }
  const handleResetGenres = (e) => {
    e.preventDefault()
    setNewVideogame({
      ...newVideogame,
      genres: []
    })
  }
  
  return (
    <div className={styles.form}>
      <h1>Create your own Videogame</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div>
        <label className={styles.labels}>Name:</label>
        <input name="name" value={newVideogame.name} onChange={handleChange} className={styles.inputs}/>
        <div className={styles.warningError}>{errors.name}</div>
        </div>
        <div>
        <label className={styles.labels}>Release Date:</label>
        <input type='date' name="releaseDate" value={newVideogame.releaseDate} onChange={handleChange} className={styles.inputs}/>
        <div className={styles.warningError}>{errors.releaseDate}</div>
        </div>
        <div>
        <label className={styles.labels}>Rating:</label>
        <input type='number' min='0' max='5' name="rating" value={newVideogame.rating} onChange={handleChange} className={styles.inputs}/>
        <div className={styles.warningError}>{errors.rating}</div>
        </div>
        <div>
        <label className={styles.labels}>ImageURL:</label>
        <input name="imageUrl" value={newVideogame.imageUrl} onChange={handleChange} className={styles.inputs}/>
        <div className={styles.warningError}>{errors.imageUrl}</div>
        </div>
        <div>
        <label className={styles.labels}>Description:</label>
        <input name="description" value={newVideogame.description} onChange={handleChange} className={styles.inputs}/>
        <div className={styles.warningError}>{errors.description}</div>
        </div>
        <div>
        <label className={styles.labels}>Platforms:</label>
        <select className={styles.selectors} onChange={handleChoice}>
          <option disabled selected>Select platforms...</option> 
          {platformsArr.map((op, i) =>{return <option value={op} key={i}>{op}</option>})}
        </select>
        <div>{newVideogame.platforms}</div>
        <button onClick={(e)=>handleResetPlatforms(e)} className={styles.buttonReset}>Reset</button>
        <div className={styles.warningError}>{errors.platforms}</div>
        </div>
        <div>
        <label className={styles.labels}>Genres:</label>
         <select className={styles.selectors} onChange={handleSelect}>
         <option disabled selected>Select genres...</option> 
           {stateGenre.map((op, i) =>{
          return <option value={op.id} key={i}>{op.name}</option>
        })}</select>
        <button onClick={(e)=>handleResetGenres(e)} className={styles.buttonReset}>Reset</button>
        <div>{newVideogame.genres.map(g=>g + ", ")}</div>
         <div className={styles.warningError}>{errors.genres}</div>
        </div>
        <Link to='/home'><button  className={styles.button}>Back</button></Link>
        <button type="submit" disabled={!Object.keys(errors).length === 0 || errors.name || errors.releaseDate || errors.imageUrl || errors.rating || errors.description || errors.platforms || errors.genres} className={styles.button}>Create</button>
      </form>
    </div>
  );
}



export default CreateVideogame;
