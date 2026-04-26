import type React from "react";

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


export interface EducacionItem {
    id: number;
    institucion: string;
    titulo: string;
    periodo: string;
    ubicacion: string;
}

export interface ExperienciaItem {
    id: number;
    empresa: string;
    pais?: string;
    rol?: string;
    periodo: string;
    tecnologias?: string[];
    logros?: string[];
}

export interface Curriculum {
    Educacion: EducacionItem[];
    Experiencia: ExperienciaItem[];
}

export interface Props {
    title: string;
    items: ExperienciaItem[];
    icon?: React.ReactNode;
}

export interface EducationProps {
    items: EducacionItem[]
    icon: React.ReactNode;
    title: string;
}