import "./CardRows.css";

import React from "react";
import { width } from "@mui/system";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
  


function CardRows({ row_title, language }) { 
  console.log(language)
  const [data, setData] = useState([])
  const getData = async () => {
    const url = `https://hotstar-v.herokuapp.com/movies?language=${language || "hi"}`
    const a = await axios.get(url)
    setData(a.data.results)
  }
  useEffect(() => { getData() }, [])
  return (
    <div className="row-title">
      <h3>{row_title}</h3>
      <div className="card-container">
        {data.map(el => <Card
          key={el.id}
          id={el.id}
          title={el.title}
          imageUrl={el.poster_path}
          discription={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Optio incidunt voluptas ipsam delectus sequi temporibus.`}
        />
        )}
      </div>
    </div>
  );
}

export default CardRows;


// {
//   { "adult": false, 
//   "backdrop_path": "/d5UMzVEfXlYOAcvNNlWixVk4GL6.jpg", 
//   "belongs_to_collection": null, 
//   "budget": 0, 
//   "genres": [{ "id": 18, "name": "Drama" }], 
//   "homepage": "https://www.sonyliv.com/movies/homecoming-1000159528", 
//   "id": 852659, 
//   "imdb_id": "tt14767926", 
//   "original_language": "hi", 
//   "original_title": "#Homecoming", 
//   "overview": "A group of \"friends\" and \"misfits\", who had formed a popular yet short-lived youth theatre group, reunite for the first time after seven years on an eventful Durga Pujo night at their old rehearsal space, a bungalow which is about to be converted into Kolkata's first five-star heritage hotel by the Ganges.", "popularity": 0.923, "poster_path": "/7dhnxOv4kyhljRjAe5QOTtYozxg.jpg", "production_companies": [{ "id": 157704, "logo_path": null, "name": "Lok", "origin_country": "" }], "production_countries": [{ "iso_3166_1": "IN", "name": "India" }], "release_date": "2022-02-17", "revenue": 0, "runtime": 0, "spoken_languages": [{ "english_name": "Bengali", "iso_639_1": "bn", "name": "বাংলা" }, { "english_name": "English", "iso_639_1": "en", "name": "English" }, { "english_name": "Hindi", "iso_639_1": "hi", "name": "हिन्दी" }], "status": "Released", "tagline": "", "title": "#Homecoming", "video": false, "vote_average": 0.0, "vote_count": 0 }
// }