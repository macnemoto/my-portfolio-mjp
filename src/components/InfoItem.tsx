import type { LucideIcon } from "lucide-react";

interface InfoItemProps {
    title: string;
    value: string;
    icon: LucideIcon;
}

const InfoItem = ({ title, value, icon: Icon }: InfoItemProps) => {
    return (
        <div className="flex flex-row gap-3 items-center group">
            <div className="bg-secondary-color h-9 w-9 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                <Icon className="w-4 h-4 text-zinc-400 group-hover:text-yellow-400 transition-colors" />
            </div>
            <div className="text-start truncate flex-1">
                <p className="text-zinc-500 text-xs uppercase tracking-wider">{title}</p>
                <p className="text-zinc-300 text-sm truncate">{value}</p>
            </div>
        </div>
    )
}

export default InfoItem;