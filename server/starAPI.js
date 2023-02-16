import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";
const router = Router();
router.get("/stars", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM stars");
		res.json(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(200).json(error);
	}
});

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

router.post("/stars", async (req, res) => {
	const { name, description } = req.body;

	// Check if all required fields are provided
	if (!name || !description) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	try {
		await db.query("INSERT INTO stars (name, description) VALUES ($1, $2)", [
			name,
			description,
		]);
		res.status(201).send();
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to create star" });
	}
});

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

export default router;
