
interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    size?: string;
}


function ServiceCard({title, description, icon, size = "h-16 w-16"}: ServiceCardProps) {
    return (
        <div className="bg-[#2A2A2B] p-5 flex flex-col justify-center items-center text-center rounded-lg border-[1px] border-[#FFFFFF0D]">
            <div className="mb-5">
                <img className={size} src={icon} alt="Web development icon" />
            </div>
            <div>
                <h2 className="font-bold text-md pb-2">{title}</h2>
                <p className="font-light text-sm text-balance">{description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;