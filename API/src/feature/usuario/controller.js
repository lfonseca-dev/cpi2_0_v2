import UserService from "./service.js";
import * as response from "../../utils/response.js";

const UserController = {
  async create(req, res) {
    await UserService.create(req.body);
    return response.created(res, { message: "Usuário criado com sucesso!" });
  },
  async update(req, res) {
    const { id } = req.params;
    const dbUser = await UserService.getById(id);

    if (!dbUser) {
      return response.notFound(res, { message: "Usuário não encontrado!" });
    }

    await UserService.update({ ...dbUser, ...req.body, id });
    return response.success(res, {
      message: "Usuário atualizado com sucesso!",
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) {
      return response.notFound(res, { message: "Usuário não encontrado!" });
    }

    await UserService.delete(id);
    return response.success(res, { message: "Usuário deletado com sucesso!" });
  },

  async getById(req, res) {
    const { id } = req.params;
    const data = await UserService.getById(id);

    if (!data) {
      return response.notFound(res, { message: "Usuário não encontrado!" });
    }

    return response.success(res, {
      message: "Usuário consultado com sucesso!",
      data,
    });
  },

  async getAll(_, res) {
    const data = await UserService.getAll();

    if (!data.length) {
      return response.notFound(res, { message: "Nenhum usuário encontrado!" });
    }

    return response.success(res, {
      message: "Usuário consultado com sucesso!",
      data,
    });
  },
};

export default UserController;
