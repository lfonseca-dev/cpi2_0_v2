import UserRepository from "./repository.js";
import { hashPass } from "../../utils/passwordUtils.js";

const UserService = {
  async create(data) {
    const hashedPass = await hashPass(data.senha); // criptografia da senha no momento de criação do novo usuário
    return await UserRepository.create({ ...data, senha: hashedPass });
  },
  async update(data) {
    return await UserRepository.update(data);
  },
  async delete(id) {
    return await UserRepository.delete(id);
  },

  async getById(id) {
    return await UserRepository.getByID(id);
  },
  async getAll() {
    return await UserRepository.getAll();
  },
};

export default UserService;
