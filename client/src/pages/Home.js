import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import GithubButton from "react-github-login-button";

export function Home() {
const githubLoginUrl = "https://github.com/login/oauth/authorize";
	const client_id = process.env.CLIENT_ID;
    const redirect_uri = process.env.REDIRECT_URI;
    const state = process.env.CLIENT_KEY;
    const url = `${githubLoginUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;
return (
	<main className="main" role="main">
		<div className="card">
			<h2 className="header">Welcome to</h2>
			<h1 className>STAR</h1>
			<Link to={url}><GithubButton></GithubButton></Link>
		</div>
	</main>
);
}

export default Home;
