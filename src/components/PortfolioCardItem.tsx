import type { PortfolioProps } from "../types/resume.types";



function PortfolioCardItem({ projects }: PortfolioProps) {

    return (
        <div>
            {projects.map((project) => (
                <section key={project.id} className="mb-5">
                    <img className="rounded-lg h-44 w-full object-cover mb-5" src={project.image} alt={project.title} />
                    <h2 className="font-bold">{project.title}</h2>
                    <p className="font-light">{project.type}</p>
                </section>
            ))}
        </div>
    );
}

export default PortfolioCardItem;