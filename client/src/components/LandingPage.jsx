import React from "react";
import { Link } from 'react-router-dom';


export function LandingPage () {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='/home'>
                <button>START</button>
            </Link>
        </div>
    )
};

export default LandingPage;