import skillsData from '../data/skills.json';
import type { Skill } from '../types/profile.types';

function SkillsInfo() {
    const skills: Skill[] = skillsData.skills;

    return (
        <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-yellow-400 rounded-full"></span>
                Technical Skills
            </h2>
            <ul className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                    <li 
                        key={index} 
                        className="bg-secondary-color/30 p-4 rounded-xl flex items-center justify-center hover:bg-secondary-color/60 transition-all duration-200 border border-zinc-700/30 hover:border-yellow-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/5" 
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