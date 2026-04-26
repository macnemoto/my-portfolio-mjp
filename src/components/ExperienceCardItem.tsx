import type { Props } from "../types/resume.types"



function ExperienceCardItem({ items, title, icon }: Props) {

    return (
        <section>
            <section className="flex flex-row items-center gap-5 mb-5">
                <div className=" bg-secondary-color p-2 rounded-lg z-20">
                    {icon}
                </div>
                <p className="text-2xl font-bold">{title}</p>
            </section>
            <ul className="ml-8">
                {items.map((exp) => (
                    <li key={exp.id} className="relative pl-8 pb-10
                       before:absolute before:-top-10 before:-left-3 before:-bottom-5 before:w-[2px] before:bg-zinc-100 
                       last:before:hidden 
                       after:absolute after:left-[-17px] after:top-2 after:h-[12px] after:w-[12px] after:rounded-full after:bg-yellow-500 after:ring-4 after:ring-[#111]">
                        <h2 className="font-bold mb-2 ml">{exp.empresa}</h2>
                        <p className="font-light mb-1">{exp.rol}</p>
                        <p className="text-yellow-500 text-sm">{exp.periodo}</p>
                    </li>
                ))}
            </ul>
        </section>);
}

export default ExperienceCardItem;