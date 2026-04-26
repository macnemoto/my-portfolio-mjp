import ExperienceCardItem from "../../components/ExperienceCardItem";
import ResumeDataRaw from "../../data/resumenRaw.json"
import { BookOpen , GraduationCap } from "lucide-react";
import EducationCardItem from "../../components/EducationCardItem"



function ResumeCard() {
    const title = Object.keys(ResumeDataRaw)

    return (
        <div className="bg-primary-color p-4 first:rounded-t-xl last:rounded-b-xl relative">
            <EducationCardItem items={ResumeDataRaw.Educación} title={title[0]} icon={<GraduationCap/>} />
            <ExperienceCardItem items={ResumeDataRaw.Experiencia} title={title[1]} icon={<BookOpen/>} />
        </div>
    );
}

export default ResumeCard;