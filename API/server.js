import express from "express";
import cors from "cors";

import { routes } from "./src/routes";

const api = express();

const PORT = process.env.API_PORT;

api.use(express.json());
api.use(cors());

routes.forEach(({ path, router }) => {
  api.use(path, router);
});

api.listen(PORT, () => {
  console.log(`APIhttp://localhost:${PORT}`);
});