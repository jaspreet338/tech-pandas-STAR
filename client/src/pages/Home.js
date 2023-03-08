import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./cyf_brand.png";
import GithubButton from "react-github-login-button";

export function Home() {
const githubLoginUrl = "https://github.com/login/oauth/authorize";
	const client_id = process.env.CLIENT_ID;
    const redirect_uri = process.env.REDIRECT_URI;
    const state = process.env.CLIENT_KEY;
    const url = `${githubLoginUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;
return (
	<main className="main-login" role="main">
		<img src={logo} alt="logo" className="cyf-logo" />
		<div className="login_wrapper">
			<div className="text-flicker-in-glow">
				<article className="star_article">
					<ul>
						<h3>
							<b>S</b>ituation
						</h3>
						<h3>
							<b>T</b>ask
						</h3>
						<h3>
							<b>A</b>ction
						</h3>
						<h3>
							<b>R</b>esult
						</h3>
					</ul>
				</article>
			</div>
			<div className="login_git">
				<h2 className="header">Welcome to</h2>
				<h1 className>
					<b>STAR</b>
				</h1>
				<Link to={url} className="link">
					<GithubButton className="git_btn"></GithubButton>
				</Link>
			</div>
		</div>
	</main>
);
}

export default Home;
