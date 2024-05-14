import React from 'react';
import "./Search.scss"

const Search = () => {
	return (
		<div className="search">
				<div className="lens-icon"><svg className='icon' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"/></svg></div>
				<input type="text" className="search_input" placeholder='Search by service, sector'/>
		</div>
	);
};

export default Search;