import { useState, useEffect } from "react"
import NewsEntryAgnolia from "./NewsEntryAgnolia"
/* import NewsEntry from "./NewsEntry" */

export default function FormatAgnoliaResponse({ url, showOL = "1", points=true, author=true, hide=true, past=true, comments=true }) {

    const [myNewsList, setMyNewsList] = useState([])
    const [firstNumber, setFirstNumber] = useState(1)
    const [enumeration, setEnumeration] = useState(1)

    const getData = async () => {
        try {
            const data = await fetch(`${url}&page=${firstNumber}`)
            const unpackedData = await data.json()
            setMyNewsList(unpackedData.hits)
            return ""
        } catch (error) {
            return "didnt work"
        }
    }

    useEffect(() => {
        const controller = new AbortController();       
        fetch(`${url}&page=${firstNumber}`, { signal: controller.signal })
            .then((result) => result.json())
            .then((data) => setMyNewsList(data.hits))
        return () => {
            controller.abort()
        }
    }, [firstNumber])

    const myAdaptedNewsList = myNewsList.map((element) => ({
        ["by"]: element.author,
        ["score"]: element.points,
        ["title"]: element.title,
        ["time"]: element.created_at_i,
        ["id"]: element.objectID,
        ["url"]: element.url
    }))

    const showMoreData = () => {
        setFirstNumber(prev => prev + 1)
        setEnumeration(prev => prev + 30)
    }

    return (

        <>
            <ol className="entry" start={enumeration}>
                {myAdaptedNewsList.map((item) => <NewsEntryAgnolia key={item.id} myNewsItem={item} comments={comments} points={points} author={author} hide={hide} past={past} api="algolia" /> )}
                {/* {shownNewsList?.map((item) => <NewsEntry key={item} item={item} comments={comments} points={points} author={author} hide={hide} past={past}/>)} */}
            </ol>
            <button className="moreButton" onClick={showMoreData}>More</button>
        </>
    )
}