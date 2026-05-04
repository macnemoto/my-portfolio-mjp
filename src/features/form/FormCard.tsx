import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../../types/form.schema";
import InputForm from "../../components/InputForm";
import { Send, Mail } from "lucide-react";
import TextArea from "../../components/TextArea";
import config from '../../data/config.json';
import { useToast } from "../../context/ToastContext";
import AnimatedSection from "../../components/AnimatedSection";

function FormCard() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur"
    })
    const { showToast } = useToast();

    const handleSubmitForm = async (data: ContactFormData) => {
        try {
            const response = await fetch(config.form.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                showToast("¡Mensaje enviado con éxito! Revisaré tu correo pronto.", "success")
                reset()
            } else {
                showToast("Hubo un problema al enviar. Por favor, intenta de nuevo.", "error")
            }
        } catch (error) {
            console.error("Detalles del error:", error)
            showToast("Error de conexión. Revisa tu internet.", "error")
        }
    }

    return (
        <AnimatedSection delay={0.4}>
            <div className="bg-card rounded-xl p-5 md:p-7 border border-primary shadow-card transition-colors duration-400">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl accent-muted flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Get In Touch</h2>
                        <p className="text-secondary text-sm mt-1">Have a project in mind? Let's talk</p>
                        <div className="h-1 w-16 bg-accent rounded-full mt-2"></div>
                    </div>
                </div>
                
                {/* Contact Form */}
                <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-secondary mb-2">Full Name</label>
                            <InputForm placeholder={"John Doe"} errors={errors} name={"fullName"} register={register} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                            <InputForm placeholder={"john@example.com"} errors={errors} name={"email"} register={register} />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">Subject</label>
                        <InputForm placeholder={"Project collaboration"} errors={errors} name={"subject"} register={register} />
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                        <TextArea placeholder={"Tell me about your project..."} errors={errors} name={"message"} register={register} size="" />
                    </div>
                    
                    <button 
                        className="w-full bg-accent hover:bg-accent-hover text-bg-card font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </AnimatedSection>
    );
}

export default FormCard;