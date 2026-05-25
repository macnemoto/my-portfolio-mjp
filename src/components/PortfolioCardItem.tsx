import type { PortfolioProps } from "../types/resume.types";



function PortfolioCardItem({ projects }: PortfolioProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <section key={project.id} className="mb-5 border rounded-lg border-slate-800 h-72">
                    <img className="rounded-lg h-44 w-full object-cover mb-5" src={project.image} alt={project.title} />
                    <div className="p-4">
                        <h2 className="font-bold">{project.title}</h2>
                        <p className="font-light">{project.type}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default PortfolioCardItem;