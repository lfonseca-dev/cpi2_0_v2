import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { createUserDTO, getUserByIdDTO, updateUserDTO } from "./dto.js";
import UserController from "./controller.js";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:id", validate(getUserByIdDTO, "params"), UserController.getById);

router.post("/", validate(createUserDTO), UserController.create);

router.put(
  "/:id",
  validate(getUserByIdDTO, "params"),
  validate(updateUserDTO),
  UserController.update,
);

router.delete(
  "/:id",
  validate(getUserByIdDTO, "params"),
  UserController.delete,
);

export default router;
