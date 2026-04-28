import { z } from "zod"

export const contactSchema = z.object({
    fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres.").max(100, "El nombre es demasiado largo"),
    email: z.email({
        message: "Por favor ingrese un correo electrónico válido",
    }),
    subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres.").max(150, "El asunto es demasiado largo"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(2000, "El mensaje es demasiado largo"),

})

export type ContactFormData = z.infer<typeof contactSchema>