import ServiceCard from "../../components/ServiceCard";
import iconDev from '../../assets/icon-dev.svg'
import iconDesign from '../../assets/icon-design.svg'
import iconBackend from '../../assets/icon-backend.svg'


function AboutCardt() {
    return (
        <div className="bg-primary-color p-4 rounded-lg">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="bg-yellow-500 rounded-full h-1 w-20 mt-1 mb-3"></div>
            <p className="mb-5">Ingeniero de Sistemas y Desarrollador Web Full Stack con más de 2 años de experiencia
                creando aplicaciones escalables. Mi enfoque principal se centra en el ecosistema
                JavaScript/TypeScript, especializándome en el desarrollo frontend con React y Tailwind
                CSS, y backend con Node.js y Express.
            </p>
            <ServiceCard title={"Web development"} description={"Desarrollo de sitios web de alta calidad a nivel profesional."} icon={iconDev} />
            <ServiceCard title={"UI/UX Design"} description={"El diseño más moderno y de alta calidad, realizado a nivel profesional."} icon={iconDesign} />
            <ServiceCard title={"Backend Development"} description={"Servicios de backend de alto rendimiento diseñados para la escalabilidad y una experiencia de usuario impecable."} icon={iconBackend} />
        </div>
    );
}

export default AboutCardt;