import PortfolioCardItem from "../../components/PortfolioCardItem";
import { projects } from "../../data/portfolio.json"; 


function PortfolioCard() {
    return (
        <section className="bg-primary-color p-7 border border-zinc-800 rounded-lg mb-5">
            <h1 className="mb-2 font-bold text-2xl md:text-3xl">My Projects</h1>
            <p className="text-[#A1A1AA] mb-5">Trabajos recientes</p>
            <PortfolioCardItem projects={projects}/>
        </section>);
}

export default PortfolioCard;