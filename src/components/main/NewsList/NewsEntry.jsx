
import { useEffect, useState } from "react"
// Import NewsAttr Components
import Points from "./NewsAttr/Points"
import Author from "./NewsAttr/Author"
import TimePast from "./NewsAttr/TimePast"
import Hide from "./NewsAttr/Hide"
import Past from "./NewsAttr/Past"

export default function NewsEntry({ item, points, author, hide, past, comments }) {
    const [myNewsItem, setMyNewsItem] = useState({})
    const url = "https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty"


    const getData = async (signal) => {
        try {
            const data = await fetch(url, { signal })
            const unpackedData = await data.json()
            setMyNewsItem(unpackedData)
            return myNewsItem

        } catch (error) {
            return "didnt work"
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        getData(signal)
        return () => {
            controller.abort()
        }
    }, [])

    const getTopLevelDomain = () => {
        if (myNewsItem?.url) {
            let parts = []
            parts = myNewsItem?.url?.split("/")
            let tld = parts[2]
            return "(" + tld + ")"
        }
    }

    const getComments = () => {
        if (comments) {
            if (myNewsItem?.kids) {
                return myNewsItem.kids.length == 1 ? "| " + myNewsItem.kids.length + " comment" : "| " + myNewsItem.kids.length + " comments"
            } else {
                return "| discuss"
            }
        }
    }

    return (
        <>
            <li>
                <div>
                    <img className="triangleIcon" src="https://news.ycombinator.com/triangle.svg" alt="triangle-icon" />
                    <a className="newstitle" href={myNewsItem.url}>{myNewsItem.title}</a>
                    <a className="titlelink" href={getTopLevelDomain()}>{getTopLevelDomain()}</a>
                </div>
                <div className="subtitle">
                    <Points score={myNewsItem?.score} showPoints={points} />
                    <Author by={myNewsItem?.by} showAuthor={author} />
                    <TimePast publishTime={myNewsItem?.time} />
                    <Hide showHide={hide} />
                    <Past showPast={past} />
                    <a>{getComments()}</a>
                </div>
            </li>
        </>
    )

}