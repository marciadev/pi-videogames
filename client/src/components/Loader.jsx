import React from "react";
import loader from "../resources/images/ZF6H.gif"

export function Loader (){
    return(
        <div>
            <img src={loader} alt='loading...'/>
        </div>
    )
}
export default Loader;