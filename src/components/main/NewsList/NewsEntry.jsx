
import { useEffect, useState } from "react"

export default function NewsEntry({ item, points, author, hide, past, comments }) {

    const [myNewsItem, setMyNewsItem] = useState({})
    const url = "https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty"
    const currentDate = Date.now()

    const getData = async (signal) => {
        try {
            const data = await fetch(url, {signal})
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

    const getTimePast = () => {
        if (myNewsItem?.time) {
            let timePastMin = Math.floor((currentDate / 1000 - myNewsItem.time) / 60);
            let timePastHour = Math.floor((currentDate / 1000 - myNewsItem.time) / 60 / 60);
            let timePastDay = Math.floor((currentDate / 1000 - myNewsItem.time) / 60 / 60 / 24);
            if (timePastMin == 1) {
                return timePastMin + " minute ago"
            } else if (timePastMin < 60) {
                return timePastMin + " minutes ago"
            } else if (timePastHour < 24) {
                return timePastHour + " hours ago"
            } else if (timePastDay == 1) {
                return timePastDay + " day ago"
            } else {
                return timePastDay + " days ago"
            }
        }
    }

    const getTopLevelDomain = () => {
        if (myNewsItem?.url) {
            let parts = []
            parts = myNewsItem?.url?.split("/")
            let tld = parts[2]
            // return "(" + tld + ")"
            return   tld  
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

    const getPoints = () => {
        if (points && myNewsItem?.score) {
            return myNewsItem.score == 1 ? myNewsItem.score + " point" : myNewsItem.score + " points"
        }
    }

    const getAuthor = () => {
        if (author && myNewsItem?.by) {
            return   myNewsItem.by
        }
    }

    const getHide = () => {
        if (hide) {
            return (
                <>
                    | <a href="">hide</a>
                </>
            )
        }
    }

    const getPast = () => {
        if (past) {
            return (
                <>
                    | <a href="">past</a>
                </>
            )
        }
    }

    return (
        <>
            <li>
                <div><img className="triangleIcon" src="https://news.ycombinator.com/triangle.svg" alt="triangle-icon" /><a className="newstitle" href={myNewsItem.url}>{myNewsItem.title}</a> <a className="titlelink"href={getTopLevelDomain()}>({getTopLevelDomain()})</a></div>
                <div className="subtitle">
                    {getPoints()} by <a href="">{getAuthor()}</a> <a href="">{getTimePast()}</a> {getHide()} {getPast()} <a>{getComments()}</a>
                </div>
            </li>
        </>
    )

}