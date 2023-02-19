/* eslint-disable no-console */
import { Pool } from "pg";

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
});

class User {
	constructor({ Name, Role, Class, Area }) {
		this.Name = Name;
		this.Role = Role;
		this.Class = Class;
		this.Area = Area;
	}

	async add() {
		try {
			// check if user already exists in the DB
			const { rows: existingUser } = await pool.query(
				"SELECT * FROM users WHERE name = $1",
				[this.Name]
			);
			if (existingUser.length) {
				throw new Error("User already exists");
			}

			// save the user to the DB
			const { rows: newUser } = await pool.query(
				"INSERT INTO users(Name, Role, Class, Area) VALUES ($1, $2, $3, $4) RETURNING *",
				[this.Name, this.Role, this.Class, this.Area]
			);
			return newUser[0];
		} catch (error) {
			console.error(error);
			throw new Error("Internal server error");
		}
	}

	static async getAll() {
		try {
			const { rows: users } = await pool.query("SELECT * FROM users");
			return users;
		} catch (error) {
			console.error(error);
			throw new Error("Internal server error");
		}
	}
}

export default User;