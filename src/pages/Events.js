import React from "react";
import "../css/event.css";
import EventCard from "../components/EventCard";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../helper/contextAPI";
import Loader from "../components/Loader";


const SpecialChar = (artistName) => {
  artistName = artistName.replace(/ /g, '%20').replace(/\*/g, '%252A').replace(/\//g, '%252F').replace(/\?/g, '%253F').replace(/\"/g, '%27C');
  return artistName;
}

const Events = () => {
  
  const {loggedIn,setLoggedIn} = useContext(LoginContext);
  const [eventData, setEventData] = useState();
  const [artistData, setArtistData] = useState();
  const [errStatus, setErrStatus] = useState();
  let showComponent=1;
  let heading='';

  useEffect(() => {
    setErrStatus(null);
    if(loggedIn){
    axios
      .get( `https://cors-access-allow.herokuapp.com/https://rest.bandsintown.com/artists/${SpecialChar(loggedIn)}?app_id=1234`   )
      .then(res => {
        let artistData = res.data;
        setArtistData( artistData );
        return axios.get(`https://cors-access-allow.herokuapp.com/https://rest.bandsintown.com/artists/${SpecialChar(loggedIn)}/events?app_id=1234&date=upcoming` ); })
      .then(res => {
        let eventData = res.data;
        setEventData( eventData );
      })
      .catch(function (error) {
        if (error.response) {
          setErrStatus(error.response.status)
          console.log(error.response);
        }
      });
    }    
}, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps



if (errStatus)
 {
  heading="No Results To Show";
  showComponent=2; 

  } 
else if (  eventData === undefined ||  artistData === undefined)
{
  return <Loader/>;
}
else if(eventData.length<1)
{
  heading="No Upcomming Events";
  showComponent=2;
}
if (showComponent==2)
  { 
  return(
    <section className="eventCard" id="eventCard">
        <div className="box-container">
                <div className="empty">
                <h1 className="heading"><span>{heading}</span>  </h1>
                  </div>
        </div>
        
    </section> 
      )
  }
else {

heading=artistData.name

return (
  <section className="eventCard" id="eventCard">
    <h1 className="heading">  <span>{heading}</span>        </h1>
     <div className="box-container">
      {
             eventData &&
             eventData.map((item) => ( 
                 <EventCard    
                 key={item.id}
                 id={item.id}
                 facebook_page_url={artistData.facebook_page_url}
                 image_url={artistData.image_url}
                 event_url={item.url}
                 venue={item.venue}
                 datetime={item.datetime}
                 />))
          }
           </div>
         
   </section>
  
      
  );
   
};
}

export default Events;

