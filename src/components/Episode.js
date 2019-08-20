import React, { useEffect, useState } from "react";
import axios from 'axios';

function Episode(){
	const [episode, setEpisode] = useState([])


	useEffect(() => {

	    // TODO: Add AJAX/API Request here - must run in `useEffect`
	    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	    axios.get('https://rickandmortyapi.com/api/episode/')
	      .then(res => {
	         setEpisode(res.data.results)
	        
	      })
	      .catch(err =>{
	        console.log(err, 'error has happen')
	      })
	  }, []);




	return(
		<div>

			{episode.map(episode => 
        		<div key={episode.id} className='episodeList'>
          			<h3>name: {episode.name}</h3>
          			<p>air date: {episode.air_date}</p>
          			<p>episode: {episode.episode}</p>
          
        		</div> 
      		)}
		</div>
	)
}

export default Episode;
