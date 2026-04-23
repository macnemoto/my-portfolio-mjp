import { BookOpen } from "lucide-react";
// import type { ResumeCardItemProps } from "../types/resume.types";
import type { ExperienciaItem } from "../types/resume.types";


function ResumeCardItem({ item }: {item: ExperienciaItem}) {

    return (
        <div className="bg-primary-color p-4 first:rounded-t-xl last:rounded-b-xl relative">
            <section className="flex flex-row items-center gap-5 mb-10">
                <div className=" bg-secondary-color p-2 rounded-lg z-20">
                    <BookOpen />
                </div>
                <p className="text-2xl font-bold">"Experiencia"</p>
            </section>
            <ul className="ml-8">
                <li className="relative pl-8 pb-10
                       before:absolute before:-top-10 before:-left-3 before:-bottom-5 before:w-[2px] before:bg-zinc-100 
                       last:before:hidden 
                       after:absolute after:left-[-17px] after:top-2 after:h-[12px] after:w-[12px] after:rounded-full after:bg-yellow-500 after:ring-4 after:ring-[#111]">
                    <h2 className="font-bold mb-2 ml">{item.empresa}</h2>
                    <p className="font-light">{item.rol}</p>
                    <p className="text-yellow-500 text-sm">{item.periodo}</p>
                </li>
                <li className="relative pl-8 pb-10 after:absolute after:left-[-17px] after:top-2 after:h-[12px] after:w-[12px] after:rounded-full after:bg-yellow-500 after:ring-4 after:ring-[#111]">hola mundo</li>
            </ul>
        </div>);
}

export default ResumeCardItem;