import { useState, useEffect } from "react";
import SingleStar from "./SingleStar";
import AddForm from "./AddForm";
import Search from "./Search";

const StarList = () => {
	const [stars, setStars] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [starSearch, setStarSearch] = useState("");

	useEffect(() => {
		if (stars === null) {
			console.log("data working");
			fetch("/api/stars")
				.then((res) => {
					if (res.status === 500) {
						throw new Error(res.status);
					} else {
						return res.json();
					}
				})
				.then((data) => {
					console.log(data);
					setStars(data);
					setLoading(false);
				})
				.catch(() => {
					setStars([]);
					setError(true);
				});
		}
	}, [stars]);
	let filteredStars = stars ? stars : [];

	if (starSearch.trim() !== "") {
		console.log(starSearch);

		filteredStars = filteredStars.filter(
			(star) =>
				star.situation.includes(starSearch.trim()) ||
				star.task.includes(starSearch.trim()) ||
				star.action.includes(starSearch.trim()) ||
				star.result.includes(starSearch.trim())
		);
	}

	return (
		<div className="star-container">
			<h2>Welcome to your Star List</h2>
			<AddForm setStars={setStars} />
			<Search updateFilter={setStarSearch} placeholder="search stars" />
			<ul>
				{loading && <span>Loading, please wait until stars loads...</span>}
				{error && <span>{"There is a problem fetching the  data "}</span>}
				{filteredStars.map((star) => (
					<li id="list-item" key={star.id}>
						<SingleStar star={star} setStars={setStars} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default StarList;
