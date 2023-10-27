import { useState } from "react"
import NewsList from "../components/main/NewsList"
import FormatAgnoliaResponse from "../components/main/NewsList/FormatAgnoliaResponse"

export default function Past() {
    const [lastShownDate, setLastShownDate ] = useState(Math.floor((Date.now()-86400000)/1000))
    const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i<" + lastShownDate)

    const dateText = new Date()
    /* dateText.setUTCDate(lastShownDate) */
/*     console.log(dateText)
    console.log(lastShownDate) */

    return (
        <div>
            <p>Stories from {lastShownDate} .</p>
            <p>Go back a day, month, or year. Go forward a day.</p>
            <FormatAgnoliaResponse url={url} past={false} api={"agnolia"} />
        </div>
    )
}