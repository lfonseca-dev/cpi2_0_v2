import z from 'zod';

export const createEngenheiroDTO = z.object({
    nome: z
        .string({invalid_type_error: "O nome do engenheiro deve ser uma string"})
        .trim()
        .min(3, { message: "O nome do engenheiro deve conter pelo menos 3 caracteres" }),
});

export const getEngenheiroDTO = z.object({
    id: z.coerce
        .number({ invalid_type_error: "O id do engenheiro deve ser um número" })
        .int()
        .positive({ message: "O id do engenheiro deve ser um número positivo" }),
});

export const updateEngenheiroDTO = createEngenheiroDTO.partial();