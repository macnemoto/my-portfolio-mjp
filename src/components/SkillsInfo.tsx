import skillsData from '../data/skills.json';
import type { Skill } from '../types/profile.types';

function SkillsInfo() {
    const skills: Skill[] = skillsData.skills;

    return (
        <div>
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                Technical Skills
            </h2>
            <ul className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                    <li 
                        key={index} 
                        className="bg-surface/60 p-4 rounded-xl flex items-center justify-center hover:bg-surface transition-all duration-200 border border-secondary hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow" 
                        role="listitem"
                    >
                        <i className={`devicon-${skill.name}-${skill.style} ${skill.isColored ? 'colored' : ''} text-4xl md:text-5xl`} aria-hidden="true"></i>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsInfo;