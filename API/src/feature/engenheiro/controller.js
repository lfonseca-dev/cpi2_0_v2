import EngenheiroService from "./service.js";
import * as response from "../../utils/response.js";

const EngenheiroController = {
    async create (req, res) {
        await EngenheiroService.create(req.body);
        return response.success(res, { 
            message: "Engenheiro criado com sucesso!" 
        });
    },
    async update (req, res) {
        const { id } = req.params;
        const engenheiro = await EngenheiroService.getById(id);

        if (!engenheiro) {
            return response.notFound(res, { 
                message: "Engenheiro não encontrado!" 
            });
        }

        const data = { ...engenheiro, ...req.body };

        await EngenheiroService.update(data);
        return response.success(res, { 
            message: "Engenheiro atualizado com sucesso!" 
        });
    },
    async delete (req, res) {
        const { id } = req.params;
        const engenheiro = await EngenheiroService.getById(id);

        if (!engenheiro) {
            return response.notFound(res, { 
                message: "Engenheiro não encontrado!" 
            });
        }

        await EngenheiroService.delete(req.params.id);
        return response.success(res, { 
            message: "Engenheiro excluído com sucesso!" 
        });
    },
    async getAll (req, res) {
        const data = await EngenheiroService.getAll();

        if (!data.length) {
            return response.notFound(res, { 
                message: "Nenhum engenheiro encontrado!" 
            });
        }
        
        return response.success(res, { 
            message: "Engenheiros consultados com sucesso!",
            data,
        });
    },
    async getById (req, res) {
        const { id } = req.params;
        const engenheiro = await EngenheiroService.getById(id);

        if (!engenheiro) {
            return response.notFound(res, { 
                message: "Engenheiro não encontrado!" 
            });
        }

        return response.success(res, { 
            message: "Engenheiro consultado com sucesso!",
            data: engenheiro,
        });
    }
};

export default EngenheiroController;