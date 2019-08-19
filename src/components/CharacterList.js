import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard.js';
export default function CharacterList() {
 
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        
        setCharacter(res.data.results)  
        
      })
      .catch(err =>{
        console.log(err, 'error has happen')
      })
  }, []);

  return (

   
    <div className="character-list grid-view">
      {character.map(data => 
        <div key={data.id} className='card'>
          <img src={data.image} alt={data.name} />
          <h3>{data.name}</h3>
          <p>gender: {data.gender}</p>
          <p>species: {data.species}</p>
          <p>origin: {data.location.name}</p>
          <p>status: {data.status}</p>
          
        </div> 
      )}
          
    </div>
    
  );
}
