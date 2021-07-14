
import React, { useEffect,useState ,useContext} from "react";
import FavouritesCard from "../components/FavouritesCard";

import "../css/event.css";
import { GlobalList } from "../helper/GlobalList";


const getlocalItems=()=>{
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));  }
  else{
    return {};  }
}


const Favourites = () => {
  
  const {globalList,setGlobalList} = useContext(GlobalList);
  const [favourites, setFavourites] = useState();
  const [empty, setEmpty] = useState();
  const [arrLen, setArrLen] = useState();


 
  useEffect(() => {
    let arr = localStorage.getItem('lists');
    if(arr)
       {    setFavourites(JSON.parse(localStorage.getItem('lists')))   
       setGlobalList(localStorage.getItem('lists').length);      }
    else
      {setEmpty(true);      }
    }, [globalList]);

if(empty || favourites==undefined)
{
return (
  <section className="eventCard" id="eventCard">
        <div className="box-container">
                <div className="empty">
                <h1 className="heading"><span>No Favourite Events !</span>  </h1>
                  </div>
        </div>
        
    </section> )
}
else{
 return ( 
  <section className="eventCard" id="eventCard">
    <h1 className="heading">  <span>Favourites</span>        </h1>
     <div className="box-container">
      {
             Object.keys(favourites).map((key, index) => ( 
                 <FavouritesCard   
                 key={index}
                 id={Object.keys(favourites)[0]}
                 facebook_page_url={favourites[key][0]}
                 datetime={favourites[key][1]}
                 image_url={favourites[key][2]}
                 event_url={favourites[key][3]}
                 venue={favourites[key][4]}
                 />))
          }
           </div>  
   </section>      
  );
   
};
}
export default Favourites;
