import express from "express";
import cors from "cors";
import "dotenv/config";

import { routes } from "./routes/routes.js";

const api = express();

const PORT = process.env.API_PORT ?? 3000;

api.use(cors());
api.use(express.json());

routes.forEach(({ path, router }) => {
  api.use(path, router);
});

api.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
