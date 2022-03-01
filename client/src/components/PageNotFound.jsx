import React from "react";
import { Link } from "react-router-dom";
import img from "../resources/images/game_over.png"


export function PageNotFound(){
    return (
        <div>
            <h1>Page not found</h1>
            <h2>404</h2>
            <img src={img} alt='NOT FOUND'/>
            <Link to='/home'><button>Home</button></Link>
        </div>
    )
}

export default PageNotFound;