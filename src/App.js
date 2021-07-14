import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./css/event.css";
import TopArtists from "./pages/TopArtists";
import SavedEvents from "./pages/SavedEvents";
import Footer from "./components/Footer";
import { GlobalList  }  from "./helper/GlobalList";
import { LoginContext } from "./helper/contextAPI";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loggedIn,setLoggedIn] = useState("")
  const [globalList,setGlobalList] = useState([])
 return (
  <LoginContext.Provider value={{loggedIn,setLoggedIn}}>
    <GlobalList.Provider value={{globalList,setGlobalList}}>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Switch>
      
        <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/Events">
              <Events/>
          </Route>
          <Route exact path="/SavedEvents">
              <SavedEvents/>
          </Route>
          <Route exact path="/TopArtists">
              <TopArtists/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
      </GlobalList.Provider>
      </LoginContext.Provider>
     
  );
}

export default App;
