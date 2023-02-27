import { useState, useEffect } from "react";
import SingleStar from "./SingleStar";
import AddForm from "./AddForm";
const StarList = () => {
	const [stars, setStars] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
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
			.catch(() => setError(true));
	}, []);
	return (
		<div className="star-container">
			<h2>Welcome to your Star List</h2>
			<AddForm setStars={setStars} />
			<ul style={{ listStyleType: "none" }}>
				{loading && <span>Loading, please wait until stars loads...</span>}
				{error && <span>{"There is a problem fetching the  data "}</span>}
				{stars.length > 0 &&
					stars.map((stars) => (
						<li id="list-item" key={stars.id}>
							<SingleStar star={stars} />
						</li>
					))}
			</ul>
		</div>
	);
};
export default StarList;
