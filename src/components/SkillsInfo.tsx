function SkillsInfo() {
    return (
        <div>
            <h1 className="font-bold text-2xl mb-7">Habilidades</h1>
            <ul className="flex flex-row gap-5 overflow-x-auto my-2">
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-html5-plain-wordmark colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-css3-plain-wordmark colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-javascript-plain colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-react-original-wordmark colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-tailwindcss-original colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-nodejs-plain-wordmark colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-express-original-wordmark text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-mongodb-plain-wordmark colored text-7xl"></i></li>
                <li className="bg-[#242938] p-5 rounded-lg"><i className="devicon-git-plain-wordmark colored text-7xl"></i></li>
            </ul>

        </div>
    );
}

export default SkillsInfo;