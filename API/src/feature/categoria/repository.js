import pool from "../../config/pool.js";

const CategoriaRepository = {
    async create (categoria) {
        return await pool.execute(`INSERT INTO categoria (descricao) VALUES (?)`, [categoria.descricao]);
    },
    async update (categoria) {
        return await pool.execute(`UPDATE categoria SET descricao = ? WHERE id = ?`, [categoria.descricao, categoria.id]);
    },
    async delete (id) {
        return await pool.execute(`DELETE FROM categoria WHERE id = ?`, [id]);
    },
    async getAll () {
        const [categorias] = await pool.execute(`SELECT * FROM categoria`);
        return categorias;
    },
    async getById (id) {
        const [categoria] = await pool.execute(`SELECT * FROM categoria WHERE id = ?`, [id]);
        return categoria[0];
    },
};

export default CategoriaRepository;