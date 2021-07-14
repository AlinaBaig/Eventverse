import React from "react";
import "../css/event.css";


const EventCard = ({
  id,
  facebook_page_url,
  image_url,
  event_url,
  venue,
  datetime
}) => {
  const saveIt = () => {
    var dict ={}
    let arr=JSON.parse(localStorage.getItem('lists'));
    console.log("InMem ",arr);
    if(!arr)
      arr={}
    console.log("gotMem ",arr);
    arr[id]=[facebook_page_url,datetime,image_url,event_url,venue];
    console.log("afterAdd ",arr);
     localStorage.setItem('lists', JSON.stringify(arr));
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
                   {/* <a href="http://www.facebook.com/5330548481" className="icons"> <i className="fab fa-heart"></i></a>
                   <button><a href="#">Button Text</a></button>

                   <a href="http://www.facebook.com/5330548481" className="icons"> <i className="fab fa-facebook"></i></a> */}
                   <button className="btnIcon"  onClick={saveIt}><i className="fas fa-heart"></i></button>
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
