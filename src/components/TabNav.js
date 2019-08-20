import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

	return(
		<div className='nav'>
		<NavLink exact to="/">Home Page</NavLink>
		<NavLink to="/CharacterList">Characters</NavLink>
		<NavLink to="/LocationsList">Location</NavLink>
		<NavLink to="/Episode">Episodes</NavLink>
		</div>
		)


};
