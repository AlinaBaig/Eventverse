import React,{} from "react";
import { LoginContext } from "../helper/contextAPI";
import { useContext } from "react";
import { useHistory } from "react-router-dom";


const ArtistCard = ({
  artist,
}) => {
  const {loggedIn,setLoggedIn} = useContext(LoginContext);
  const history = useHistory();

  function clickHandler(){
    setLoggedIn(`${artist[0]}`);
    history.push("/Events");
  }
  return (

    <div className="box">
        <img src={`${artist[1]}`} alt=""/>
        <div className="content">
            <h3>{artist[0]}</h3>
            <a  onClick={clickHandler} className="btnLarge">see more</a>
        </div>
    </div>
   
   );
};

export default ArtistCard;
