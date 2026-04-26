import ResumeCardItem from "../../components/ResumeCardItem";
import resumeDataRaw from "../../data/resumenRaw.json"



function ResumeCard() {

    return (
        <div>
            <ResumeCardItem item={resumeDataRaw.Experiencia} />
        </div>
    );
}

export default ResumeCard;