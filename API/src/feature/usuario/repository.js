import pool from "../../config/pool.js";

const UserRepository = {
  async create(usuario) {
    return await pool.execute(
      `INSERT INTO usuario(nome, senha, nivel_acesso) VALUES(?,?,?)`,
      [usuario.nome, usuario.senha, usuario.nivel_acesso],
    );
  },
  async update(usuario) {
    return await pool.execute(
      `UPDATE usuario SET nome=?, senha=?, nivel_acesso=? WHERE id=?`,
      [usuario.nome, usuario.senha, usuario.nivel_acesso, usuario.id],
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM usuario WHERE id=?`, [id]);
  },

  async getByID(id) {
    const [user] = await pool.execute(`SELECT * FROM usuario WHERE id=?`, [id]);
    return user[0];
  },
  async getAll() {
    const [users] = await pool.execute(`SELECT * FROM usuario;`);
    return users;
  },
};

export default UserRepository;
