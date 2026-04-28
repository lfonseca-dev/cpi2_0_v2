import z from "zod";

export const createUserDTO = z.object({
  nome: z.string().min(3, { message: "Nome é obrigatório!" }),
  senha: z
    .string()
    .min(6, { message: "A senha deve conter ao menos 6 caracteres!" })
    .regex(/[A-Z]/, {
      message: "A senha deve conter no mínimo uma letra maiúscula!",
    })
    .regex(/[0-9]/, { message: "A senha deve conter no minimo um número!" }),
  nivel_acesso: z.enum(["PRODUCAO", "USER", "ADMIN"]),
});

export const updateUserDTO = createUserDTO.partial();

export const getUserByIdDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({ message: "O id deve ser um número maior que 0 (zero)!" }),
});
