import CategoriaService from "./service.js";
import * as response from "../../utils/response.js";

const CategoriaController = {
    async create (req, res) {
        await CategoriaService.create(req.body);
        return response.created(res, { 
            message: "Categoria criada com sucesso" 
        });
    },
    async update (req, res) {
        const { id } = req.params;
        const categoria = await CategoriaService.getById(id);

        const data = {...categoria, ...req.body, id};

        await CategoriaService.update(data);
        return response.success(res, { 
            message: "Categoria atualizada com sucesso" 
        });
    },
    async delete (req, res) {
        const categoria = await CategoriaService.getById(req.params.id);

        if (!categoria) {
            return response.notFound(res, {
                message: "Categoria não encontrada",
            });
        }

        await CategoriaService.delete(req.params.id);
        return response.success(res, {
            message: "Categoria deletada com sucesso"
        });
    },
    async getAll (req, res) {
        const categorias = await CategoriaService.getAll();
        return response.success(res, {
            message: "Categorias consultadas com sucesso",
            data: categorias,
        });
    }, 
    async getById (req, res) {
        const categoria = await CategoriaService.getById(req.params.id);

        if (!categoria) {
            return response.notFound(res, {
                message: "Categoria não encontrada",
            });
        }

        return response.success(res, {
            message: "Categoria consultada com sucesso",
            data: categoria,
        });
    },
};

export default CategoriaController;