import CategoriaRouter from "../feature/categoria/routes.js";
import EngenheiroRouter from "../feature/engenheiro/routes.js";

export const routes = [
    {
        path: "/api/categoria",
        router: CategoriaRouter,
    },
    {
        path: "/api/engenheiro",
        router: EngenheiroRouter,
    }
]