import type { IconType } from "react-icons";

interface NetworksIconProps {
    href: string;
    icon: IconType;
    size?: string
}



function NetworksIcon( { href, size = "text-2xl", icon: Icon}: NetworksIconProps) {
    return (
        <div>
            <a  href={href} className={size}><Icon/></a>
        </div>
    );
}

export default NetworksIcon;