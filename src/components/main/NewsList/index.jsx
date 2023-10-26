import NewsEntry from "./NewsEntry"
import { useState, useEffect } from "react"

export default function NewsList() {

    const [myNewsList, setMyNewsList] = useState([])
    const [shownNewsList, setShownNewsList] = useState([])

    const getData = async () => {
        try {
            const data = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
            const unpackedData = await data.json()
            setMyNewsList(unpackedData)
            setShownNewsList(unpackedData.slice(0, 5))
            console.log(shownNewsList)
            return ""
        } catch (error) {
            return "didnt work"
        }
    }

    useEffect (() =>{
        getData()
    }, [])
    

    return (
        <ul>
            {shownNewsList.map((item) => <NewsEntry key={item} item={item} />)}
        </ul>
    )
}