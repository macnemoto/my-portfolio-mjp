import ExperienceCardItem from "../../components/ExperienceCardItem";
import ResumeDataRaw from "../../data/resumenRaw.json"
import { BookOpen , GraduationCap } from "lucide-react";
import EducationCardItem from "../../components/EducationCardItem"
import AnimatedSection from "../../components/AnimatedSection";

function ResumeCard() {
    const title = Object.keys(ResumeDataRaw)

    return (
        <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-xl p-5 md:p-7 border border-primary shadow-card transition-colors duration-400">
                {/* Education Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl accent-muted flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title[0]}</h2>
                        <div className="h-1 w-16 bg-accent rounded-full mt-1"></div>
                    </div>
                </div>
                
                {/* Education */}
                <div className="mb-10">
                    <EducationCardItem items={ResumeDataRaw.Educación} title={title[0]} icon={<GraduationCap/>} />
                </div>
                
                {/* Experience Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl accent-muted flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title[1]}</h2>
                        <div className="h-1 w-16 bg-accent rounded-full mt-1"></div>
                    </div>
                </div>
                
                {/* Experience */}
                <div>
                    <ExperienceCardItem items={ResumeDataRaw.Experiencia} title={title[1]} icon={<BookOpen/>} />
                </div>
            </div>
        </AnimatedSection>
    );
}

export default ResumeCard;