import type { LucideIcon } from "lucide-react";

interface NetworksIconProps {
    href: string;
    icon: LucideIcon;
}



function NetworksIcon( { href, icon: Icon}: NetworksIconProps) {
    return (
        <div>
            <a href={href}><Icon/></a>
        </div>
    );
}

export default NetworksIcon;