import PortfolioCardItem from "../../components/PortfolioCardItem";
import { projects } from "../../data/portfolio.json"; 
import AnimatedSection from "../../components/AnimatedSection";

function PortfolioCard() {
    return (
        <AnimatedSection delay={0.3}>
            <div className="bg-card rounded-xl p-5 md:p-7 border border-primary shadow-card transition-colors duration-400">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl accent-muted flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">My Projects</h2>
                        <p className="text-secondary text-sm mt-1">Recent work and case studies</p>
                        <div className="h-1 w-16 bg-accent rounded-full mt-2"></div>
                    </div>
                </div>
                
                {/* Projects */}
                <PortfolioCardItem projects={projects}/>
            </div>
        </AnimatedSection>
    );
}

export default PortfolioCard;