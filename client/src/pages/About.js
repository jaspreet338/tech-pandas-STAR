import React from "react";
import { Link } from "react-router-dom";

const About = () => (
	<div>
		<h1>What is STAR?</h1>
		<article>
			<section>
				<h4>Situation</h4>
				<p>Set the scene and give the necessary details of your example.</p>
			</section>
			<section>
				<h4>Task</h4>
				<p>Describe what your responsibility was in that situation.</p>
			</section>
			<section>
				<h4>Actions</h4>
				<p>Explain exactly what steps you took to address it.</p>
			</section>
			<section>
				<h4>Result</h4>
				<p>Share what outcomes your actions achieved.</p>
			</section>
		</article>

		<article>
			<section>
				<h3>About the App</h3>
				<p>
					This app is an opportunity for you to record your growth and the
					skills you pick up so that when you create your CV/resume and start
					applying for jobs, you can see how far you have come and what you have
					achieved, with examples. You will be building an experience map for
					yourself. You will do this by reflecting on what you have done over
					the week, talking about what you have achieved, and what you have
					found difficult. A lot of work you will accomplish will get forgotten
					as time has passed you will find it difficult to remember the skills
					you picked up along the way.
				</p>
			</section>
			<section>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/XoBrMpH0Vz8"
					title="So good they can&#39;t ignore you! - Gargi Sharma"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</section>
		</article>

		<div>
			<p>
				This app ensures that does not happen. You can track what you have
				learned, even if it is not aligned with your goals, it is good to see
				the extra tasks you did and what you learned from that. Do not forget
				any invisible work, i.e extra hours spent on learning a new concept.
			</p>
			<p>
				Please watch this video by Gargi Sharma where she discusses the
				importance of "bragging" about yourself and celebrating your
				achievements.
			</p>
			<div>
				<h3>How to use the STAR APP</h3>
				<p>
					Add your Stars by filling out the form. Once you filled it in if you
					want you can easily make changes by clicking the Edit button and
					saving it. You can also search for your Stars by using the Search
					filled. If there are any comments from your TA or Mentor you can find
					them in the Comment section.
				</p>
			</div>
			<Link to="/dashboard"> Let's Start </Link>
		</div>
	</div>
);

export default About;
