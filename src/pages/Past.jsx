import { useEffect, useState } from "react"
import NewsList from "../components/main/NewsList"
import FormatAgnoliaResponse from "../components/main/NewsList/FormatAgnoliaResponse"

export default function Past() {
    const [lastShownDate, setLastShownDate ] = useState(Math.floor((Date.now()-86400000)/1000))
    const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i<" + lastShownDate + "&hitsPerPage=30")

    const dateText = new Date(lastShownDate * 1000)

    useEffect(() => {
        setUrl("http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i<" + lastShownDate + "&hitsPerPage=30")
    }, [lastShownDate])

    const prevDay = () => {
        setLastShownDate((prev) => ((prev * 1000) - 86400000)/1000)
    }
    // Leider wird bei Änderung des Tages noch nicht die Komponente FormatAgnoliaResponse neu gerendert. Ich weiß gerade nicht, wie das geht.

    return (
        <div>

            <div className="mainDesc">
            <p>Stories from {dateText.toUTCString()} .</p>
            <p>Go back a <button onClick={prevDay}>day</button>, month, or year. Go forward a day.</p></div>
            <FormatAgnoliaResponse url={url} past={false} api={"agnolia"} />
        </div>
    )
}