import React from "react";

import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";



export default function App() {
  return (
    <main>
      <Header />
    	
      <AppRouter />
      
      <LocationsList />
    </main>
  );
}
