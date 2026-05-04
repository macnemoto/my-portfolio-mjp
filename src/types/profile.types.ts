export interface ProfileData {
    name: string;
    title: string;
    avatar: string;
    email: string;
    phone: string;
    location: string;
    social: {
        linkedin: string;
        github: string;
        email: string;
    };
}

export interface AboutData {
    description: string;
    services: {
        title: string;
        description: string;
        icon: string;
    }[];
}

export interface Skill {
    name: string;
    style: string;
    isColored: boolean;
}

export interface SkillsData {
    skills: Skill[];
}

export interface FormConfig {
    endpoint: string;
}