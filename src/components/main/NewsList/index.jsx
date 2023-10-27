import NewsEntry from "./NewsEntry"
import { useState, useEffect } from "react"

export default function NewsList({ url, showOL = "1", points=true, author=true, hide=true, past=true, comments=true }) {

    const [myNewsList, setMyNewsList] = useState([])
    const [shownNewsList, setShownNewsList] = useState([])
    const [firstNumber, setFirstNumber] = useState(1)
    let showBtn = ""

    const getData = async (signal) => {
        try {
            const data = await fetch(url, {signal})
            const unpackedData = await data.json()
            setMyNewsList(unpackedData)
            setShownNewsList(unpackedData.slice(firstNumber-1, firstNumber+29))
            return ""
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

    useEffect(() => {
        setShownNewsList(myNewsList?.slice(firstNumber-1, firstNumber+29))
    }, [firstNumber])


    const showMoreData = () => {
        setFirstNumber(prev => prev + 30)
    }

    shownNewsList?.length <30 && (showBtn = "none")

    return (
        
        <div >
            <ol className="entry" style={{ listStyle: showOL }} start={firstNumber}>
                {shownNewsList?.map((item) => <NewsEntry key={item} item={item} comments={comments} points={points} author={author} hide={hide} past={past}/>)}
            </ol>
            <button className="moreButton" onClick={showMoreData} style={{display: showBtn}}>More</button>
        </div>

    )
}