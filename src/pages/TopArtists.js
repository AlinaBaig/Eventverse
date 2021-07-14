import ArtistCard from "../components/ArtistCard";
import React from "react";
import "../css/event.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";


const SpecialChar = (artistName) => {
  artistName = artistName.replace(/ /g, '%20').replace(/\*/g, '%252A').replace(/\//g, '%252F').replace(/\?/g, '%253F').replace(/\"/g, '%27C');
  return artistName;
}

const TopArtists = () => {
  
  const [status, setSatus] = useState("");
  const [dataState, setDataState] = useState();
  useEffect(() => {
    const array = [ "Billie Eilish"  ,   "maroon 5" ,   "halsey" ,   "Justin Bieber "  ,   "The Weekend" ,   "Bruno Mars" ,   "Harry Styles" ,   "Lorde",  "The Chainsmokers" ,   "Deftones" ,   "Alexander 23" ,   "Enrique Iglesias" ]; // changed the input array a bit so that the `array[i].id` would actually work - obviously the asker's true array is more than some contrived strings
  let users = [];
  let promises = [];
  for (var i = 0; i < array.length; i++) {
    promises.push(
      axios.get(`https://cors-access-allow.herokuapp.com/https://rest.bandsintown.com/artists/${SpecialChar(array[i])}?app_id=1234` ).then(response => {
        if(response.data.name!==undefined){
        users.push([response.data.name,response.data.image_url]);}
      })
    )
  }

  Promise.all(promises).then((results) => {
    console.log(users);

    setDataState(users);
    setSatus("Y");
  });
    
}, []);
  
  if (
    status===undefined || status === ""  ) 
  {
    return <Loader/>;
  } 
  else {
// If data is fetched from api shows each item in component card
// console.log("hereeeee22222",dataState)
return (
   <section className="artistCard" id="artistCard">
         <h1 className="heading">    <span>TOP ARTISTS</span></h1>
         <div className="box-container">
          {dataState.map((item,index) => ( 
              <ArtistCard    
              key={index}
              artist={item}   
              />))
          }
        </div>
      </section> 
  );
          }
};

export default TopArtists;

    