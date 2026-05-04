import PortfolioCardItem from "../../components/PortfolioCardItem";
import { projects } from "../../data/portfolio.json"; 
import AnimatedSection from "../../components/AnimatedSection";

function PortfolioCard() {
    return (
        <AnimatedSection delay={0.3}>
            <div className="bg-primary-color rounded-2xl p-5 md:p-8 border border-zinc-800 shadow-xl">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                        <span className="text-yellow-400 text-xl">🚀</span>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">My Projects</h2>
                        <p className="text-zinc-400 text-sm mt-1">Recent work and case studies</p>
                        <div className="h-1 w-16 bg-yellow-400 rounded-full mt-2"></div>
                    </div>
                </div>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <PortfolioCardItem projects={projects}/>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default PortfolioCard;