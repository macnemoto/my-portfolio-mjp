import type { LucideIcon } from "lucide-react";

interface InfoItemProps {
    title: string;
    value: string;
    icon: LucideIcon;
}



const InfoItem = ({ title, value, icon: Icon }: InfoItemProps) => {

    return (
        <div className="flex flex-row gap-3 justify-start items-center rounded-lg w-full max-w-sm mb-2">
            <div className="bg-secondary-color h-9 w-9 rounded-md flex items-center justify-center">
                <Icon className="text-[#6E716D]" size={15} />
            </div>
            <div className="text-start truncate">
                <p className="text-[#6E716D] text-xs">{title}</p>
                <p className="text-[#b6b6b0] truncate font-light text-sm">{value}</p>
            </div>
        </div>
    )
}

export default InfoItem;