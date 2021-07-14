
import React from "react";
import "../css/event.css";


const getlocalItems=()=>{
  let list = localStorage.getItem('lists');
  
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}

  
const SavedEvents = () => {
  

return (
  <section className="eventCard" id="eventCard">
        <div className="box-container">
                <div className="empty">
                <h1 className="heading"><span>No Favourite Events !</span>  </h1>
                  </div>
        </div>
        
    </section> 
  
      
  );
   

}

export default SavedEvents;

    