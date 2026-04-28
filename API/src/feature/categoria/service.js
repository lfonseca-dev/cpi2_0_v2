import CategoriaRepository from "./repository.js";

const CategoriaService = {
    async create (categoria) {
        return await CategoriaRepository.create(categoria);
    },
    async update (categoria) {
        return await CategoriaRepository.update(categoria);
    },
    async delete (id) {
        return await CategoriaRepository.delete(id);
    },
    async getAll () {
        return await CategoriaRepository.getAll();
    },
    async getById (id) {
        return await CategoriaRepository.getById(id);
    },
};

export default CategoriaService;