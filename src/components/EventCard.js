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
    let arr=JSON.parse(localStorage.getItem('lists'));
    if(!arr)
      arr=[]
    arr.push( {id:id,facebook_page_url:facebook_page_url,date:datetime,  img:image_url,  url:event_url,  Vn:venue})
    localStorage.setItem('lists', JSON.stringify(arr));
    console.log("dscsdvcasdvsdvfsdvsf===",JSON.parse(localStorage.getItem('lists')));

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
                    <a href={ event_url.length>0 ? `${facebook_page_url}`:  `https://www.facebook.com/` } className="btnIcon" ><i className="fab fa-facebook-f"></i></a> 
                   <a href={ event_url.length>0 ? `${event_url}`:  `https://www.bandsintown.com/` } className="btn">Tickets</a> 

                </div>  
        </div>
    </div>
   
   );
};

export default EventCard;