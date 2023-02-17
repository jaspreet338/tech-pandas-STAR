import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";
const router = Router();

// Getting all star from the database

router.get("/stars", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM stars");
		res.json(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(500).json(error);
	}
});

//  Getting star by id

router.get("/stars/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const result = await db.query("SELECT * FROM stars WHERE id = $1", [id]);
		if (result.rows.length === 0) {
			return res.status(404).json({ error: `Star with id ${id} not found` });
		}
		res.json(result.rows[0]);
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to retrieve star" });
	}
});

//  getting stars by unique id
router.get("/users/:id/stars", async (req, res) => {
	const userId = req.params.id;

	try {
		const result = await db.query(
			"SELECT  s.name, s.description " +
				"FROM stars s " +
				"JOIN users u ON s.user_id = u.id " +
				"WHERE u.id = $1",
			[userId]
		);

		res.json(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to get stars for user" });
	}
});
//  Adding star on the database

router.post("/stars", async (req, res) => {
	const { name, description } = req.body;

	// Check if all required fields are provided
	if (!name || !description) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	try {
		const { rows: users } = await db.query("SELECT id FROM users");
		if (users.length === 0) {
			return res.status(404).json({ error: "No users found" });
		}

		// Randomly select a user ID from the available ones
		const userId = users[Math.floor(Math.random() * users.length)].id;

		await db.query(
			"INSERT INTO stars (name, description, user_id) VALUES ($1, $2, $3)",
			[name, description, userId]
		);
		res.status(201).send();
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to create star" });
	}
});



//   deleting star from the database by id

router.delete("/stars/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const result = await db.query("DELETE FROM stars WHERE id = $1", [id]);

		if (result.rowCount === 0) {
			return res.status(404).json({ error: `Star with id ${id} not found` });
		}

		res.status(204).json({ message: `Star with id ${id} is deleted` });
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to delete star" });
	}
});

//  modifying stars by id

router.put("/stars/:id", async (req, res) => {
	const id = req.params.id;
	const { name, description } = req.body;

	if (!name || !description) {
		return res.status(400).json({ error: "Name and description are required" });
	}

	try {
		await db.query(
			"UPDATE stars SET name = $1, description = $2 WHERE id = $3",
			[name, description, id]
		);

		const result = await db.query("SELECT * FROM stars WHERE id = $1", [id]);

		if (result.rowCount === 0) {
			return res.status(404).json({ error: `Star with id ${id} not found` });
		}

		res.status(200).json(result.rows[0]);
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to update star" });
	}
});

export default router;
