import type { LucideIcon } from "lucide-react";

interface InfoItemProps {
    title: string;
    value: string;
    icon: LucideIcon;
}

const InfoItem = ({ title, value, icon: Icon }: InfoItemProps) => {
    return (
        <div className="flex flex-row gap-3 items-center group">
            <div className="bg-surface h-9 w-9 rounded-lg flex items-center justify-center group-hover:accent-muted transition-colors duration-200">
                <Icon className="w-4 h-4 text-tertiary group-hover:text-accent transition-colors" />
            </div>
            <div className="text-start truncate flex-1">
                <p className="text-tertiary text-xs uppercase tracking-wider">{title}</p>
                <p className="text-secondary text-sm truncate">{value}</p>
            </div>
        </div>
    )
}

export default InfoItem;