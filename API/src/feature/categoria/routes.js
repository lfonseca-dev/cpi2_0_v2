import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { createCategoriaDTO, getCategoriaDTO, updateCategoriaDTO } from "./dto.js";
import CategoriaController from "./controller.js";

const router = Router();

router.get("/", CategoriaController.getAll);
router.get("/:id", 
    validate(getCategoriaDTO, "params"),
    CategoriaController.getById
);

router.post("/", 
    validate(createCategoriaDTO), 
    CategoriaController.create
);

router.put("/:id", 
    validate(getCategoriaDTO, "params"), 
    validate(updateCategoriaDTO),
    CategoriaController.update
);

router.delete("/:id",
    validate(getCategoriaDTO, "params"),
    CategoriaController.delete
);

export default router;