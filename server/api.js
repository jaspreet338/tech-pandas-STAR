import { Router } from "express";

import logger from "./utils/logger";
import starRouter from "./starAPI";
import registrationRouter from "./registrationAPI";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.use(starRouter);
router.use(registrationRouter);






export default router;
