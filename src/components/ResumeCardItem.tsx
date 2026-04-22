import { BookOpen } from "lucide-react";
import type { ResumeCardItemProps } from "../types/resume.types";


function ResumeCardItem({ item }: ResumeCardItemProps) {

    return (
        <div className="bg-primary-color p-4 first:rounded-t-xl last:rounded-b-xl relative">
            <div className="w-[0.10rem] h-40 bg-slate-400 absolute left-[2.05rem] z-0">
            </div>
            <div className="w-3.5 h-3.5 bg-white rounded-full border-[3.5px] border-primary-color absolute left-[1.7rem] top-[6.3rem] z-20"></div>
            <section className="flex flex-row items-center gap-5 mb-10">
                <div className=" bg-secondary-color p-2 rounded-lg z-20">
                    <BookOpen />
                </div>
                <p className="text-2xl font-bold">Educacion</p>
            </section>
            <ul className="list-disc ml-8 z-10">
                <li>
                    <h2 className="font-bold mb-2 ml">{item.title}</h2>
                    <p className="font-light">{item.description}</p>
                    <p className="text-yellow-500 text-sm">{item.date}</p>
                </li>
            </ul>
        </div>);
}

export default ResumeCardItem;