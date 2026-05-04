import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { PortfolioProps } from "../types/resume.types";

function PortfolioCardItem({ projects }: PortfolioProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
                <article key={project.id} className="group bg-secondary-color/30 rounded-xl overflow-hidden border border-zinc-700/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/5 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                        <img 
                            className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            src={project.image} 
                            alt={project.title} 
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-color via-transparent to-transparent opacity-60"></div>
                        
                        {/* Type Badge */}
                        <div className="absolute top-3 right-3">
                            <span className="bg-yellow-400/90 text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full">
                                {project.type}
                            </span>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                        <h3 className="font-bold text-white text-lg mb-1 group-hover:text-yellow-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm">{project.type}</p>
                        
                        {/* Actions */}
                        <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <button className="flex-1 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </button>
                            <button className="flex-1 bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300 py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
                                <FaGithub className="w-4 h-4" />
                                Code
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default PortfolioCardItem;