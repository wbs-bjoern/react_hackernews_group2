import NewsEntry from "./NewsEntry"
import { useState, useEffect } from "react"

export default function NewsList({ url, showOL = "1" }) {

    const [myNewsList, setMyNewsList] = useState([])
    const [shownNewsList, setShownNewsList] = useState([])
    const [firstNumber, setFirstNumber] = useState(1)

    const getData = async () => {
        try {
            const data = await fetch(url)
            const unpackedData = await data.json()
            setMyNewsList(unpackedData)
            setShownNewsList(unpackedData.slice(0, 10))
            return ""
        } catch (error) {
            return "didnt work"
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const showMoreData = () => {
        /* setFirstNumber(firstNumber+10) */
        setShownNewsList(myNewsList.slice(11, 21))
    }

    return (
        <>
            <ol style={{ listStyle: showOL }}>
                {shownNewsList.map((item) => <NewsEntry key={item} item={item} />)}
            </ol>
            <button onClick={showMoreData}>Mehr</button>
        </>
    )
}