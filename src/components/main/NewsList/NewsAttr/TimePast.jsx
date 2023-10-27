export default function TimePast ({publishTime}) {
    const currentDate = Date.now()
    if (publishTime) {
        let timePastMin = Math.floor((currentDate / 1000 - publishTime) / 60);
        let timePastHour = Math.floor((currentDate / 1000 - publishTime) / 60 / 60);
        let timePastDay = Math.floor((currentDate / 1000 - publishTime) / 60 / 60 / 24);
        if (timePastMin == 1) {
            return timePastMin + " minute ago "
        } else if (timePastMin < 60) {
            return timePastMin + " minutes ago " 
        } else if (timePastHour < 24) {
            return timePastHour + " hours ago "
        } else if (timePastDay == 1) {
            return timePastDay + " day ago "
        } else {
            return timePastDay + " days ago "
        }
    }
}