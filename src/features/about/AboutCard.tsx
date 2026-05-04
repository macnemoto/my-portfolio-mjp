import ServiceCard from "../../components/ServiceCard";
import iconDev from '../../assets/icon-dev.svg'
import iconDesign from '../../assets/icon-design.svg'
import iconBackend from '../../assets/icon-backend.svg'
import SkillsInfo from "../../components/SkillsInfo";
import aboutData from '../../data/about.json';
import AnimatedSection from "../../components/AnimatedSection";

const iconMap: Record<string, string> = {
    'icon-dev': 'iconDev',
    'icon-design': 'iconDesign',
    'icon-backend': 'iconBackend'
};

function AboutCard() {
    const getIcon = (iconName: string) => {
        const iconKey = iconMap[iconName];
        if (iconKey === 'iconDev') return iconDev;
        if (iconKey === 'iconDesign') return iconDesign;
        if (iconKey === 'iconBackend') return iconBackend;
        return iconDev;
    };

    return (
        <AnimatedSection delay={0.1}>
            <div className="bg-primary-color rounded-2xl p-5 md:p-8 border border-zinc-800 shadow-xl">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                        <span className="text-yellow-400 text-xl">👋</span>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white">About Me</h1>
                        <div className="h-1 w-16 bg-yellow-400 rounded-full mt-1"></div>
                    </div>
                </div>
                
                {/* Description */}
                <p className="mb-8 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">{aboutData.description}</p>
                
                {/* Services Grid */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-yellow-400 rounded-full"></span>
                        What I Do
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {aboutData.services.map((service, index) => (
                            <ServiceCard 
                                key={index}
                                title={service.title} 
                                description={service.description} 
                                icon={getIcon(service.icon)} 
                            />
                        ))}
                    </div>
                </div>
                
                {/* Skills */}
                <div className="border-t border-zinc-700/50 pt-6">
                    <SkillsInfo />
                </div>
            </div>
        </AnimatedSection>
    );
}

export default AboutCard;