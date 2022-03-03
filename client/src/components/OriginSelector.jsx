import React from "react";
import { useDispatch } from "react-redux";
import { filteredCreated } from "../actions";
import styles from '../styles/Home.module.css'

export function OriginSelector(){

    const dispatch = useDispatch();

    const origin = ["All", "Created", "Api"]

    const handleSelect = (e) => {
        dispatch(filteredCreated(e.target.value));
      };

    return (
        <div>
            <select className={styles.selectors} onChange={(e)=>{handleSelect(e)}}>
                {origin.map((op,i)=>{
                    return <option value={op} key={i}>{op}</option>
                })}
            </select>
        </div>
    )
}

export default OriginSelector;