import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { createEngenheiroDTO, getEngenheiroDTO, updateEngenheiroDTO } from "./dto.js";
import EngenheiroController from "./controller.js";

const router = Router();

router.get("/", EngenheiroController.getAll);
router.get("/:id", 
    validate(getEngenheiroDTO, "params"), 
    EngenheiroController.getById
);

router.post("/", 
    validate(createEngenheiroDTO), 
    EngenheiroController.create
);

router.put("/:id", 
    validate(getEngenheiroDTO, "params"), 
    validate(updateEngenheiroDTO),
    EngenheiroController.update
);

router.delete("/:id", 
    validate(getEngenheiroDTO, "params"), 
    EngenheiroController.delete
);

export default router;
