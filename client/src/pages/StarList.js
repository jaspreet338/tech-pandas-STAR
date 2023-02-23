import React from "react";
import SingleStar from "./SingleStar";
const StarList = () => {
	const stars = [
		{
			id: 1,
			name: "Node",
			description:
				"Sit similique quas et molestias magni aut officia quod eum Quis eaque et internos molestias ut dolore incidunt? Ea provident quod quo ullam debitis et nobis internos vel nobis omnis est voluptates eligendi et quia iste vel incidunt maiores. A voluptas nemo et blanditiis commodi et vero enim et optio ratione ad possimus laboriosam sed aliquid aperiam.",
		},
		{
			id: 2,
			name: "React.js",
			description:
				"Vel laudantium animi eum vitae atque vel assumenda veniam cum amet quasi ea commodi commodi eum sint beatae. Sit nulla optio qui sapiente excepturi sit accusantium explicabo vel omnis ratione a reiciendis distinctio. Qui nisi recusandae ut ipsum corrupti sit accusantium minima est illum perspiciatis et omnis vitae ut impedit accusantium!",
		},
		{
			id: 3,
			name: "Javascript",
			description:
				"Lorem ipsum dolor sit amet. Vel ratione quaerat hic laborum earum ut dolore sequi aut consequatur aliquid in galisum impedit eum veritatis Quis? Et laborum repellendus sed sequi eligendi aut soluta veritatis qui voluptas placeat. Sit laboriosam suscipit et eius omnis a libero ratione est labore ullam",
		},
	];
	return (
		<div className="star-container">
			<h1>Hello....</h1>
			<h2>Welcome to your Star List</h2>
			<div>
				<button>Refresh</button>
			</div>
			<ul>
				{stars.map((star) => (
					<li id="list-item" key={star.name}>
						<SingleStar star={star} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default StarList;
