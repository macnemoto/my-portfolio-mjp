import PortfolioCardItem from "../../components/PortfolioCardItem";
import { projects } from "../../data/portfolio.json"; 


function PortfolioCard() {
    return (
        <section className="bg-primary-color p-5 border border-zinc-800 rounded-lg mb-5">
            <PortfolioCardItem projects={projects}/>
        </section>);
}

export default PortfolioCard;