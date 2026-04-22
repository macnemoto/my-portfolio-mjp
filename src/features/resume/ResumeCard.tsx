import ResumeCardItem from "../../components/ResumeCardItem";
import resumeDataRaw  from "../../data/resumen.json"


function ResumeCard() {
    return (<div>
        {resumeDataRaw.map((item) => (
            <ResumeCardItem item={item} key={item.id}/>
        ) )}
    </div>);
}

export default ResumeCard;