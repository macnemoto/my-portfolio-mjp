import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    size?: string;
}

function ServiceCard({title, description, icon, size = "h-14 w-14"}: ServiceCardProps) {
    return (
        <div className="group bg-secondary-color/50 p-5 rounded-xl border border-zinc-700/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/5 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-300">
                    <img className={size} src={icon} alt={title} />
                </div>
            </div>
            <div className="text-center">
                <h2 className="font-bold text-lg pb-2 text-white group-hover:text-yellow-400 transition-colors">{title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
            <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowRight className="w-5 h-5 text-yellow-400" />
            </div>
        </div>
    );
}

export default ServiceCard;