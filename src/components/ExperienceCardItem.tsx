import type { Props } from "../types/resume.types"
import { MapPin, Briefcase, Code } from "lucide-react"

function ExperienceCardItem({ items }: Props) {
    return (
        <section>
            <ul className="space-y-6">
                {items.map((exp, index) => (
                    <li key={exp.id} className="relative pl-8 pb-8 last:pb-0">
                        {/* Timeline line */}
                        {index !== items.length - 1 && (
                            <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-accent/40 to-transparent"></div>
                        )}
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-card"></div>
                        
                        {/* Content */}
                        <div className="bg-surface/60 rounded-xl p-4 hover:bg-surface transition-all duration-200 border border-secondary hover:border-accent/50">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                <h3 className="font-bold text-primary text-lg flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-accent hidden sm:block" />
                                    {exp.empresa}
                                </h3>
                                <span className="text-accent text-sm font-medium accent-muted px-3 py-1 rounded-full whitespace-nowrap">
                                    {exp.periodo}
                                </span>
                            </div>
                            {exp.rol && (
                                <p className="text-secondary mb-2">{exp.rol}</p>
                            )}
                            {exp.pais && (
                                <p className="text-tertiary text-sm flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {exp.pais}
                                </p>
                            )}
                            {exp.tecnologias && exp.tecnologias.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {exp.tecnologias.map((tech, i) => (
                                        <span key={i} className="text-xs bg-surface text-secondary px-2.5 py-1 rounded-full flex items-center gap-1 border border-secondary">
                                            <Code className="w-3 h-3" />
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {exp.logros && exp.logros.length > 0 && (
                                <ul className="mt-3 space-y-1.5">
                                    {exp.logros.map((logro, i) => (
                                        <li key={i} className="text-sm text-secondary flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                            {logro}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ExperienceCardItem;