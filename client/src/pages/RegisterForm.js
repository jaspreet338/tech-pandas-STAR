import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { json } from "react-router-dom";
function RegisterForm() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [section, setSection] = useState("");
	const [area, setArea] = useState("");

	function register() {
		fetch("/api/register", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: `{
				"username": "${username}", 
				"name": "${name}",
				"role": "${role}",
				"section": "${section}",
				"area": "${area}"
			}`,
		})
			.then((response) => response.json())
			.then(({ data }) => {
				return navigate(`/dashboard/${data.name}`);
			})
			.catch((error) => {
				console.warn(error);
			});
	}

	return (
		<div>
			<div className="form-container">
				<h1>Register Here</h1>
				<div className="form-body">
					<div>
						<label className="form_label" htmlFor="name">
							Username
						</label>
						<input
							className="form_input"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							id="username"
							placeholder="type your name"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="name">
							Name
						</label>
						<input
							className="form_input"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							id="name"
							placeholder="Display Name"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="role">
							Role
						</label>
						<select
							defaultValue={role}
							onChange={(e) => {
								//console.log(JSON.stringify(e));
								setRole(e.target.value);
							}}
						>
							<option value="TA">TA</option>
							<option value="student">Student</option>
							<option value="mentor">Mentor</option>
						</select>
					</div>
					<div>
						<label className="form_label" htmlFor="section">
							Class
						</label>
						<input
							className="form_input"
							type="text"
							id="class"
							value={section}
							onChange={(e) => setSection(e.target.value)}
							placeholder="Class"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="area">
							Area
						</label>
						<input
							className="form_input"
							type="text"
							id="area"
							value={area}
							onChange={(e) => setArea(e.target.value)}
							placeholder="Area"
						></input>
					</div>
				</div>
				<div>
					<button onClick={register} type="submit" className="btn">
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
export default RegisterForm;
