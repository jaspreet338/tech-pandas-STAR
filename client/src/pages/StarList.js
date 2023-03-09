import { useState, useEffect } from "react";
import SingleStar from "./SingleStar";
import AddForm from "./AddForm";
import Search from "./Search";

const StarList = () => {
	const [stars, setStars] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userSearch, setUserSearch] = useState("");
	const [starSearch, setStarSearch] = useState("");
	const [comments, setComments] = useState(null);

	useEffect(() => {
		fetch("/api/comments")
			.then((res) => {
				if (res.status === 500) {
					throw new Error(res.status);
				} else {
					return res.json();
				}
			})
			.then((data) => {
				console.log(data);
				setComments(data);
				setLoading(false);
			})
			.catch((err) => {
				setComments(null);
				setError(err);
			});
	}, [comments]);

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
	if (userSearch.trim() !== "") {
		filteredStars = filteredStars.filter((star) =>
			star.name.includes(userSearch.trim())
		);
	}
	if (starSearch.trim() !== "") {
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
			<Search setSearch={setUserSearch} placeholder="filter users" />
			<Search setSearch={setStarSearch} placeholder="filter stars" />
			<ul>
				{loading && <span>Loading, please wait until stars loads...</span>}
				{error && <span>{"There is a problem fetching the  data "}</span>}
				{filteredStars.map((star) => (
					<li id="list-item" key={star.id}>
						<SingleStar
							star={star}
							setStars={setStars}
							comments={comments}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
export default StarList;