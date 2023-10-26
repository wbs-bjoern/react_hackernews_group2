import { useState, useEffect } from "react"
import NewsEntryAgnolia from "./NewsEntryAgnolia"

export default function FormatAgnoliaResponse({ url, showOL = "1", points=true, author=true, hide=true, past=true, comments=true }) {

    const [myNewsList, setMyNewsList] = useState([])
    const [shownNewsList, setShownNewsList] = useState([])
    const [firstNumber, setFirstNumber] = useState(1)

    const getData = async () => {
        try {
            const data = await fetch(url)
            const unpackedData = await data.json()
            setMyNewsList(unpackedData.hits)
            setShownNewsList(unpackedData.hits.slice(firstNumber - 1, firstNumber + 29))
            return ""
        } catch (error) {
            return "didnt work"
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const myAdaptedNewsList = myNewsList.map((element) => ({
        ["by"]: element.author,
        ["score"]: element.points,
        ["title"]: element.title,
        ["time"]: element.created_at_i,
        ["id"]: element.objectID
    }))



    return (

        <>
            <ol className="entry" start={firstNumber}>
                {myAdaptedNewsList.map((item) => <NewsEntryAgnolia key={item.id} myNewsItem={item} comments={comments} points={points} author={author} hide={hide} past={past} /> )}
                {/* {shownNewsList?.map((item) => <NewsEntry key={item} item={item} comments={comments} points={points} author={author} hide={hide} past={past}/>)} */}
            </ol>
            <button>More</button>
        </>
    )
}