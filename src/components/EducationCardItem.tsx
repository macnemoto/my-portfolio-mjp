import type { EducationProps } from "../types/resume.types"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

function EducationCardItem({ items, icon, title}: EducationProps) {
    return (
        <section>
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className="bg-secondary-color p-2.5 rounded-xl">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            
            <ul className="space-y-6">
                {items.map((edu, index) => (
                    <li key={edu.id} className="relative pl-8 pb-8 last:pb-0 group">
                        {/* Timeline line */}
                        {index !== items.length - 1 && (
                            <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400/50 to-transparent"></div>
                        )}
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-yellow-400 ring-4 ring-primary-color shadow-lg"></div>
                        
                        {/* Content */}
                        <div className="bg-secondary-color/30 rounded-xl p-4 hover:bg-secondary-color/50 transition-all duration-200 border border-zinc-700/30 hover:border-yellow-400/30">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4 text-yellow-400 hidden sm:block" />
                                    {edu.titulo}
                                </h3>
                                <span className="text-yellow-400/80 text-sm font-medium bg-yellow-400/10 px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {edu.periodo}
                                </span>
                            </div>
                            <p className="text-zinc-300 mb-1">{edu.institucion}</p>
                            {edu.ubicacion && (
                                <p className="text-zinc-400 text-sm flex items-center gap-1">
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