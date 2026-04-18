import { BookOpen } from "lucide-react";

function ResumeCardItem() {
    return (
        <div className="bg-primary-color p-4 rounded-lg ">
            <section className="flex flex-row items-center gap-5 mb-10">
                <div className=" bg-secondary-color p-2 rounded-lg">
                    <BookOpen />
                </div>
                <p className="text-2xl font-bold">Educacion</p>
            </section>
            <ul className="list-disc ml-8">
                <li>
                    <h2 className="font-bold mb-2">Instituto Universitario Politécnico "Santiago Mariño"</h2>
                    <p className="font-light">Título: Ingeniero en Sistemas</p>
                    <p className="text-yellow-500 text-sm">2012 - 2018</p>
                </li>
            </ul>
        </div>);
}

export default ResumeCardItem;