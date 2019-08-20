import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import Episode from "./components/Episode.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import WelcomePage from "./components/WelcomePage.js";




export default function App() {
  return (
    <main>
      <Header />
    	<Route exact path="/" component={WelcomePage} />
    	<Route  path="/characterList" component={CharacterList} />	
    	<Route  path="/locationsList" component={LocationsList} />	
      
      
      
    </main>
  );
}
