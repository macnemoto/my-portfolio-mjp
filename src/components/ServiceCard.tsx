import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    size?: string;
}

function ServiceCard({title, description, icon, size = "h-14 w-14"}: ServiceCardProps) {
    return (
        <div className="group bg-surface p-5 rounded-xl border border-secondary hover:border-accent transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl accent-muted flex items-center justify-center group-hover:accent-muted-hover transition-all duration-300">
                    <img className={size} src={icon} alt={title} />
                </div>
            </div>
            <div className="text-center">
                <h2 className="font-bold text-lg pb-2 text-primary group-hover:text-accent transition-colors">{title}</h2>
                <p className="text-secondary text-sm leading-relaxed">{description}</p>
            </div>
            <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowRight className="w-5 h-5 text-accent" />
            </div>
        </div>
    );
}

export default ServiceCard;