import type { LucideIcon } from "lucide-react";

interface InfoItemProps {
    title: string;
    value: string;
    icon: LucideIcon;
}



const InfoItem = ({ title, value, icon: Icon }: InfoItemProps) => {

    return (
        <div className="flex flex-row gap-3 justify-start items-center pl-2 bg-secondary-color rounded-lg py-2">
            <div className="bg-primary-color h-9 w-9 rounded-md flex items-center justify-center">
                <Icon/>
            </div>
            <div className="text-start">
                <p className="text-primary-color font-bold">{title}</p>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default InfoItem;