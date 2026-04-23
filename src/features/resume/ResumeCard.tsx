import ResumeCardItem from "../../components/ResumeCardItem";
import resumeDataRaw from "../../data/resumenRaw.json"
import type { ExperienciaItem } from "../../types/resume.types"


function ResumeCard() {

    const data: ExperienciaItem[] = resumeDataRaw.Experiencia


    return (<div>
        {data.map((item: ExperienciaItem) => (
            <ResumeCardItem item={item} key={item.id} />
        ))}
    </div>);
}

export default ResumeCard;