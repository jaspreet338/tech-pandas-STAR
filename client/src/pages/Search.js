import React, { useState } from "react";
import "./Component/Dashboard.css";

const Search = ({ updateFilter ,placeholder }) => {
	const [input, setInput] = useState("");

	const handleSearch = (e) => {
		setInput(e.target.value);
		updateFilter(e.target.value);
	};
  const clearSearch = () =>{
	setInput("");
	updateFilter("");
  };
	return (
		<div className="input-group mt-10">
			<input
				type="search"
				className="searchBar"
				placeholder={placeholder}
				aria-label={placeholder}
				aria-describedby="search-addon"
				onChange={handleSearch}
				value={input}
			/>
			<button type="button" className="btnS" onClick={clearSearch}>
				Search
			</button>
		</div>
	);
};

export default Search;
