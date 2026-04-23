import { z } from "zod";

export const userSchema = z.object({
  sendername: z
    .string()
    .min(1, { message: "Campo obligatorio" })
    .min(4, { message: "El nombre debe tener al menos 4 caracteres" })
    .max(100, { message: "El nombre es demasiado largo" }),
  email: z
    .string()
    .min(1, { message: "Campo obligatorio" })
    .email({ message: "Ingresa un correo válido" }),
  user_subject: z
    .string()
    .min(1, { message: "Campo obligatorio" })
    .min(4, { message: "El asunto debe tener al menos 4 caracteres" })
    .max(200, { message: "El asunto es demasiado largo" }),
  message: z
    .string()
    .min(1, { message: "Campo obligatorio" })
    .min(4, { message: "El mensaje debe tener al menos 4 caracteres" })
    .max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" }),
});
