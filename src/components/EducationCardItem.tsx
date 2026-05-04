import type { EducationProps } from "../types/resume.types"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

function EducationCardItem({ items }: EducationProps) {
    return (
        <section>
            <ul className="space-y-6">
                {items.map((edu, index) => (
                    <li key={edu.id} className="relative pl-8 pb-8 last:pb-0">
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
                                    <GraduationCap className="w-4 h-4 text-accent hidden sm:block" />
                                    {edu.titulo}
                                </h3>
                                <span className="text-accent text-sm font-medium accent-muted px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {edu.periodo}
                                </span>
                            </div>
                            <p className="text-secondary mb-1">{edu.institucion}</p>
                            {edu.ubicacion && (
                                <p className="text-tertiary text-sm flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {edu.ubicacion}
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default EducationCardItem;