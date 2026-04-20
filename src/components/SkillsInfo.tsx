const skills = [
    { name: 'html5', style: 'plain-wordmark', isColored: true },
    { name: 'css3', style: 'plain-wordmark', isColored: true },
    { name: 'javascript', style: 'plain', isColored: true },
    { name: 'react', style: 'original-wordmark', isColored: true },
    { name: 'tailwindcss', style: 'original', isColored: true },
    { name: 'nodejs', style: 'plain-wordmark', isColored: true },
    { name: 'express', style: 'original-wordmark', isColored: false },
    { name: 'mongodb', style: 'plain-wordmark', isColored: true },
    { name: 'git', style: 'plain-wordmark', isColored: true },
    { name: 'python', style: 'plain-wordmark', isColored: true },
]


function SkillsInfo() {


    return (
        <div>
            <h1 className="font-bold text-2xl mb-7">Habilidades</h1>
            <ul className="flex flex-row gap-5 overflow-x-auto my-2">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-[#242938] p-5 rounded-lg"><i className={`devicon-${skill.name}-${skill.style} ${skill.isColored ? 'colored' : ''} text-7xl`}></i></li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsInfo;