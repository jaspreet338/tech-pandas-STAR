import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [searchString, setSearchString] = useState("");
	const [stars, setStars] = useState([]);
	const navigate = useNavigate();

	// function to handle search from submission
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		navigate(`/dashboard?search=${searchString}`);
		window.location.reload();
	};