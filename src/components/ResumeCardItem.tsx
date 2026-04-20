import { BookOpen } from "lucide-react";

function ResumeCardItem() {
    return (
        <div className="bg-primary-color p-4 rounded-lg relative">
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
                    <h2 className="font-bold mb-2 ml">Instituto Universitario Politécnico "Santiago Mariño"</h2>
                    <p className="font-light">Título: Ingeniero en Sistemas</p>
                    <p className="text-yellow-500 text-sm">2012 - 2018</p>
                </li>
            </ul>
        </div>);
}

export default ResumeCardItem;