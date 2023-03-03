import { useState } from "react";


const Search = ({ setSearch, placeholder }) => {
	const [searchString, setSearchString] = useState("");

	// function to handle search from submission
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setSearch(searchString);
	};

	// function to handle show all button click
	const handleShowAllClick = () => {
		setSearchString("");
		setSearch("");
	};


	return (
		<div>
			<form onSubmit={handleSearchSubmit}>
				<input
					type="text"
					value={searchString}
					onChange={(event) => setSearchString(event.target.value)}
					placeholder={placeholder}
				/>
				<button type="submit">Search</button>
			</form>
			{searchString !== "" && (
				<button onClick={handleShowAllClick}>Show all</button>
			)}
		</div>
	);
};

export default Search;