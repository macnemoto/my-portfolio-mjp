import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../../types/form.schema";
import InputForm from "../../components/InputForm";
import { Send } from "lucide-react";
import TextArea from "../../components/TextArea";

function FormCard() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur"
    })

    const handleSubmitForm = async (data: ContactFormData) => {
        try {
            const response = await fetch("https://formspree.io/f/mwvypwzr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                alert("¡Mensaje enviado con éxito! Revisaré tu correo pronto.")
                reset()
            } else {
                alert("Hubo un problema al enviar. Por favor, intenta de nuevo.")
            }
        } catch (error) {
            console.error("Detalles del error:", error)
            alert("Error de conexión. Revisa tu internet.")

        }
    }

    return (
        <section className="bg-primary-color p-5 border border-zinc-800 rounded-lg text-[#75756D]">
            <h2 className="font-bold text-2xl text-white mb-5">Formulario de Contacto</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleSubmitForm)}>
                <InputForm placeholder={"Nombre de usuario"} errors={errors} name={"fullName"} register={register} />
                <InputForm placeholder={"Correo"} errors={errors} name={"email"} register={register} />
                <InputForm placeholder={"Asunto"} errors={errors} name={"subject"} register={register} />
                <TextArea placeholder={"Introduce tu mensaje..."} errors={errors} name={"message"} register={register} size="" />
                <button className="my-5 w-full border border-zinc-600 p-2 rounded-lg flex gap-3 justify-center text-yellow-300 py-3" type="submit"><Send /> Enviar Mensaje</button>
            </form>
        </section>);
}

export default FormCard;