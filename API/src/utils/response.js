const sendResponde = (res, {
    success = true,
    status = 200,
    message = "Operação realizada com sucesso",
    error = '',
    data = null,
    quant = null
} = {}) => {
    return res.status(status).json({
        success,
        status,
        message,
        error,
        data,
        quant: Array.isArray(data) ? data.length : quant ?? (data ? 1 : 0),
    });
}

export const success = (res, {message = "Operação realizada com sucesso", data = null } = {}) => {
    return sendResponde(res, { success: true, status: 200, message, data });
};

export const created = (res, {message = "Recurso criado com sucesso", data = null } = {}) => {
    return sendResponde(res, { success: true, status: 201, message, data });
};

export const notFound = (res, {message = "Recurso não encontrado", error = ''} = {}) => {
    return sendResponde(res, { success: false, status: 404, message, error });
};

export const error = (res, {message = "Ocorreu um erro no servidor", error = ''} = {}) => {
    return sendResponde(res, { success: false, status: 500, message, error });
};

export const invalidToken = (res, { message = "Token inválido ou expirado" } = {}) => {
  return sendResponse(res, { success: false, status: 498, message, erro: message, data: null, quant: 0 });
};

export const unauthorized = (res, { message = "Acesso não autorizado" } = {}) => {
    return sendResponse(res, { success: false, status: 401, message, erro: message, data: null, quant: 0 });
};