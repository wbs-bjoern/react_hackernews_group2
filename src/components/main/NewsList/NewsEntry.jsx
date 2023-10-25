
import { useEffect, useState } from "react"

export default function NewsEntry({ item }) {

    const [myNewsItem, setMyNewsItem] = useState({ "by": "nora" })
    const url = "https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty"
    const currentDate = Date.now()

    const getData = async () => {
        try {
            const data = await fetch(url)
            const unpackedData = await data.json()
            setMyNewsItem(unpackedData)
            return myNewsItem
        } catch (error) {
            return "didnt work"
        }
    }

    const tellTaskToBeStopped = () => {
        console.log(item, "stopped")
    }

    useEffect(() => {
        let datagetter = getData()
        return (
            datagetter = tellTaskToBeStopped()
        )
    }, [])

    return (
        <>
            <li>
                <div>{myNewsItem.title} ({myNewsItem.url})</div>
                <div>
                    {myNewsItem.score} point 
                    by {myNewsItem.by}  
                    {Math.round((currentDate/1000 - myNewsItem.time)/60)} minute ago 
                    | <a>hide</a>  
                    | <a>past</a>  
                    | <a>discuss</a> 
                </div>
            </li>
        </>
    )

}