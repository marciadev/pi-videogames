import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { filteredCreated } from "../actions";

export function OriginSelector(){

    const dispatch = useDispatch();

    const origin = ["All", "Created", "Api"]

    const options = origin.map(o=> {
        return {
            value: o,
            label: o,
        }
    })

    const handleSelect = (e) => {
        dispatch(filteredCreated(e.label));
      };

    return (
        <Select options={options} onChange={(e)=>{handleSelect(e)}}/>
    )
}

export default OriginSelector;