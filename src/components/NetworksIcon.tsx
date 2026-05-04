import type { IconType } from "react-icons";

interface NetworksIconProps {
    href: string;
    icon: IconType;
    size?: string
}

function NetworksIcon( { href, size = "text-xl", icon: Icon}: NetworksIconProps) {
    return (
        <a 
            target="_blank" 
            rel="noreferrer" 
            href={href} 
            className={`${size} text-tertiary hover:text-accent transition-all duration-200 hover:-translate-y-1 inline-block p-2 rounded-lg hover:bg-surface`}
            aria-label={href.includes('linkedin') ? 'LinkedIn Profile' : href.includes('github') ? 'GitHub Profile' : 'Send Email'}
        >
            <Icon/>
        </a>
    );
}

export default NetworksIcon;