import pool from "../../config/pool.js";

const EngenheiroRepository = {
    async create (engenheiro) {
        return await pool.execute(`INSERT INTO engenheiro (nome) VALUES (?)`, [engenheiro.nome]);
    },
    async update (engenheiro) {
        return await pool.execute(`UPDATE engenheiro SET nome = ? WHERE id = ?`, [engenheiro.nome, engenheiro.id]);
    },
    async delete (id) {
        return await pool.execute(`DELETE FROM engenheiro WHERE id = ?`, [id]);
    },
    async getAll () {
        const [engenheiros] = await pool.execute(`SELECT * FROM engenheiro`);
        return engenheiros;
    },
    async getById (id) {
        const [engenheiro] = await pool.execute(`SELECT * FROM engenheiro WHERE id = ?`, [id]);
        return engenheiro[0];
    }
}

export default EngenheiroRepository;