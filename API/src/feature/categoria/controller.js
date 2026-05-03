import CategoriaService from "./service.js";
import * as response from "../../utils/response.js";

const CategoriaController = {
    async create (req, res) {
        await CategoriaService.create(req.body);
        return response.created(res, { 
            message: "Categoria criada com sucesso!" 
        });
    },
    async update (req, res) {
        const { id } = req.params;
        const categoria = await CategoriaService.getById(id);

        if (!categoria) {
            return response.notFound(res, { 
                message: "Categoria não encontrada!" 
            });
        }

        const data = {...categoria, ...req.body, id};

        await CategoriaService.update(data);
        return response.success(res, { 
            message: "Categoria atualizada com sucesso!" 
        });
    },
    async delete (req, res) {
        const categoria = await CategoriaService.getById(id);

        if (!categoria) {
            return response.notFound(res, {
                message: "Categoria não encontrada!",
            });
        }

        await CategoriaService.delete(id);
        return response.success(res, {
            message: "Categoria deletada com sucesso!"
        });
    },
    async getAll (req, res) {
        const data = await CategoriaService.getAll();

        if (!data.length) {
            return response.notFound(res, {
                message: "Nenhuma categoria encontrada!",
            });
        }
        
        return response.success(res, {
            message: "Categorias consultadas com sucesso!",
            data,
        });
    }, 
    async getById (req, res) {
        const { id } = req.params;
        const categoria = await CategoriaService.getById(id);

        if (!categoria) {
            return response.notFound(res, {
                message: "Categoria não encontrada!",
            });
        }

        return response.success(res, {
            message: "Categoria consultada com sucesso!",
            data: categoria,
        });
    },
};

export default CategoriaController;