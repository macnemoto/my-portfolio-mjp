
interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    size?: string;
}


function ServiceCard({title, description, icon, size = "h-16 w-16"}: ServiceCardProps) {
    return (
        <div className="bg-secondary-color p-5 mb-6 flex flex-col justify-center items-center text-center rounded-lg">
            <div className="mb-5">
                <img className={size} src={icon} alt="Web development icon" />
            </div>
            <div>
                <h2 className="font-bold text-2xl pb-2">{title}</h2>
                <p className="font-light">{description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;