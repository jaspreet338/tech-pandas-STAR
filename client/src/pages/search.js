import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [searchString, setSearchString] = useState("");
	const [stars, setStars] = useState([]);
	const navigate = useNavigate();

	// function to handle search from submission
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		navigate(`/dashboard?search=${searchString}`);
		window.location.reload();
	};

	// function to handle show all button click
	const handleShowAllClick = () => {
		navigate("/dashboard");
		window.location.reload();
	};

	// fetch stars data initially and when search query changes
	useEffect(() => {
		// function to fetch stars data based on search query
		const fetchStarsData = async () => {
			const res = await fetch(`/stars?search=${searchString}`);
			const data = await res.json();
			setStars(data);
		};
		fetchStarsData();
	}, [searchString]);
	return (
		<div>
			<form onSubmit={handleSearchSubmit}>
				<input
					type="text"
					value={searchString}
					onChange={(event) => setSearchString(event.target.value)}
					placeholder="Search STARs by title"
				/>
				<button type="submit">Search</button>
			</form>
			{searchString !== "" && (
				<button onClick={handleShowAllClick}>Show all</button>
			)}
			<ul>
				{stars.map((star) => (
					<li key={star.id}>
						<h1>{star.name}</h1>
						<span>{star.description}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Search;