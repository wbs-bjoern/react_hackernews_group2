import NewsList from "../components/main/NewsList"

export default function New () {
    return (
        <NewsList url={"https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"} />
    )
}