import React from "react";

import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";



export default function App() {
  return (
    <main>
      <Header />
    	
      <AppRouter />
      <CharacterList />
      <CharacterCard />
    </main>
  );
}
