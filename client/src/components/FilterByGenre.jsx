import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getGenres, getByGenre } from "../actions";

export default function FilterByGenre() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);
  
  const options = allGenres.map((g) => {
    return {
      value: g.id,
      label: g.name,
    };
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(getByGenre(e.label))
  };

  return (
    <div>
      <Select options={options} onChange={(e)=>{handleChange(e)}}/>
    </div>
  );
}
