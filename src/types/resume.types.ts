export interface Experience {
    id: number;
    section: string;
    title: string;
    description: string;
    date: string;
}

export type ResumeData = Experience[];


//types for summary plus last point detection

export interface ResumeCardItemProps {
    item: Experience;
    isLast?: boolean;
}