import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../helper/contextAPI";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const history = useHistory();

  useEffect(() => {
    setLoggedIn(trackTitle);
  }, [trackTitle]);
  // window.onscroll = () =>{

  //     searchBtn.classList.remove('fa-times');
  //     searchBar.classList.remove('active');
  // }

  function clickHandler() {
    document.getElementById("search-btn").classList.toggle('fa-times');
    document.querySelector('.search-bar-container').classList.toggle('active');

  }
  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
    console.log("findClicked = ", userInput);
    history.push("/Events");
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  // console.log("searcheed= ",searched);
  return (
    <header>

      <div id="menu-bar" className="fas fa-bars"></div>

      <Link to='/' className="logo"><span>EVENT</span>VERSE<span>.</span></Link>

      <div className="icons">

        <Link to='/TopArtists' className="icons">
          <i className="fas fa-fire-alt"></i>
        </Link>
        <Link to='/Favourites' className="icons">
          <i className="fas fa-heart"></i>
        </Link>


        <i className="fas fa-search" id="search-btn" onClick={clickHandler}></i>
      </div>

      <form action="" className="search-bar-container" onSubmit={findTrack}>
        <input type="search"
          id="search-bar"
          placeholder="search here..."
          value={userInput}
          onChange={onChange}
        />
        <Link to="/Events">
          <label className="fas fa-search" onClick={findTrack}>  </label>
        </Link>



      </form>

    </header>
  );
};
export default Navbar;
