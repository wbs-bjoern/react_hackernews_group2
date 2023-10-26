import NewsEntry from "./NewsEntry"
import { useState, useEffect } from "react"

export default function NewsList({ url, showOL = "1", points=true, author=true, hide=true, past=true, comments=true }) {

    const [myNewsList, setMyNewsList] = useState([])
    const [shownNewsList, setShownNewsList] = useState([])
    const [firstNumber, setFirstNumber] = useState(1)

    const getData = async () => {
        try {
            const data = await fetch(url)
            const unpackedData = await data.json()
            setMyNewsList(unpackedData)
            setShownNewsList(unpackedData.slice(firstNumber-1, firstNumber+29))
            return ""
        } catch (error) {
            return "didnt work"
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setShownNewsList(myNewsList?.slice(firstNumber-1, firstNumber+29))
    }, [firstNumber])


    const showMoreData = () => {
        setFirstNumber(firstNumber+30)
    }

    return (
        <>
            <ol style={{ listStyle: showOL }} start={firstNumber}>
                {shownNewsList?.map((item) => <NewsEntry key={item} item={item} comments={comments} points={points} author={author} hide={hide} past={past}/>)}
            </ol>
            <button onClick={showMoreData}>More</button>
        </>
    )
}