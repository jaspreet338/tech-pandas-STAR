import { Router } from "express";

import logger from "./utils/logger";
import starRouter from "./starAPI";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});
router.use(starRouter);






export default router;
