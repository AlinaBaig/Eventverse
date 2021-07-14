import userEvent from "@testing-library/user-event";
import React,{useEffect,useState,useContext} from "react";
import "../css/event.css";
import { GlobalList } from "../helper/GlobalList";



const EventCard = ({
  id,
  facebook_page_url,
  image_url,
  event_url,
  venue,
  datetime
}) => {

  
    const {globalList,setGlobalList} = useContext(GlobalList);

    const handleDelete = () => {
        let arr=JSON.parse(localStorage.getItem('lists'));
        if(arr){
            delete arr[id];
            // setArrLen(arr.length);
            localStorage.setItem('lists', JSON.stringify(arr));
            setGlobalList(arr.length)

        }
      };

  var dt = datetime.split("T");
  const d = new Date(dt[0])
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  var eventDate = ` ${mo} ${da}, ${ye}`  

  return (
    <div className="box">
        <img src={`${image_url}`} alt=""/>
        <div className="content">
               <h1>  {eventDate} </h1>
               <h2>{venue.name}</h2>
               <h2>{venue.city}</h2>
               <h2>{venue.country}</h2>

               <div className="par">
               <button className="btnIcon"  onClick={handleDelete}><i className="fa fa-trash"></i></button>
               <button className="btnIcon"  onClick={(e) => {
                    e.preventDefault();
                    window.location.href=facebook_page_url;      }}
                    >
                   <i className="fab fa-facebook-f"></i></button>
                <a href={ event_url.length>0 ? `${event_url}`:  `https://www.bandsintown.com/` } className="btn">Tickets</a> 
                </div>  
        </div>
    </div>
   
   );
};

export default EventCard;
