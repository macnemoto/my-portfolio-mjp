interface InfoItemProps {
    title: string;
    value: string;
}



const InfoItem = ({ title, value }: InfoItemProps) => {

    return (
        <div className=" flex flex-row gap-3 justify-center items-center bg-orange-400">
            <div className="bg-red-500 h-9 w-9 rounded-md"></div>
            <div>
                <p className="text-secondary-color font-bold">{title}</p>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default InfoItem;