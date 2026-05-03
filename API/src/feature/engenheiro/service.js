import EngenheiroRepository from "./repository.js";

const EngenheiroService = {
    async create (engenheiro) {
        return await EngenheiroRepository.create(engenheiro);
    },
    async update (engenheiro) {
        return await EngenheiroRepository.update(engenheiro);
    },
    async delete (id) {
        return await EngenheiroRepository.delete(id);
    },
    async getAll () {
        return await EngenheiroRepository.getAll();
    },
    async getById (id) {
        return await EngenheiroRepository.getById(id);
    }
};

export default EngenheiroService;