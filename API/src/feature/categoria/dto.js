import z from "zod";

export const createCategoriaDTO = z.object({
    descricao: z
    .string({invalid_type_error: "O nome da categoria deve ser uma string"})
    .trim()
    .min(3, { message: "O nome da categoria deve conter pelo menos 3 caracteres" }),
});

export const getCategoriaDTO = z.object({
    id: z.coerce
    .number({ invalid_type_error: "O id da categoria deve ser um número" })
    .int()
    .positive({ message: "O id da categoria deve ser um número positivo" }),
});

export const updateCategoriaDTO = createCategoriaDTO.partial();