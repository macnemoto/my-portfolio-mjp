import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { PortfolioProps } from "../types/resume.types";

function PortfolioCardItem({ projects }: PortfolioProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
                <article key={project.id} className="group bg-surface/60 rounded-xl overflow-hidden border border-secondary hover:border-accent/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                        <img 
                            className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            src={project.image} 
                            alt={project.title} 
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                        
                        {/* Type Badge */}
                        <div className="absolute top-3 right-3">
                            <span className="bg-accent/90 text-bg-card text-xs font-semibold px-3 py-1 rounded-full">
                                {project.type}
                            </span>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                        <h3 className="font-bold text-primary text-lg mb-1 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-secondary text-sm">{project.type}</p>
                        
                        {/* Actions */}
                        <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <button className="flex-1 accent-muted hover:accent-muted-hover text-accent py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </button>
                            <button className="flex-1 bg-surface hover:bg-surface-hover text-secondary py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 transition-colors border border-secondary">
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