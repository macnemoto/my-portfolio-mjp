import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../../types/form.schema";

function FormCard() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur"
    })

    const handleSubmitForm = async (data: ContactFormData) => {
        console.log("Data lista para enviar", data)
        await new Promise(res => setTimeout(res, 2000))
        alert("Mensaje Enviado con Exito")
        reset()
    }

    return (
        <section className="bg-primary-color p-5 border border-zinc-800 rounded-lg text-neutral-950">
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div>
                    <input {...register("fullName")} placeholder="Nombre de usuario" />
                    {errors.fullName && <span>{errors.fullName.message}</span>}
                </div>
                <div>
                    <input {...register("email")} placeholder="Email" />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <input {...register("subject")} placeholder="Subject" />
                    {errors.subject && <span>{errors.subject.message}</span>}
                </div>
                <div>
                    <input {...register("message")} placeholder="Mensaje" />
                    {errors.message && <span>{errors.message.message}</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>);
}

export default FormCard;