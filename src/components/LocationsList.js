import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LocationsList() {
	const [location, setLocation] = useState([])


	useEffect(() => {

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
         setLocation(res.data.results) 
        
      })
      .catch(err =>{
        console.log(err, 'error has happen')
      })
  }, []);


	return (
		<div>
		{location.map(location => 
        <div key={location.id} className='locationsList'>
          <h3>name: {location.name}</h3>
          <p>type: {location.type}</p>
          <p>dimension: {location.dimension}</p>
          <p className="residents">residents: {location.residents.length}</p>
          
        </div> 
      )}
		</div>
	)

}
