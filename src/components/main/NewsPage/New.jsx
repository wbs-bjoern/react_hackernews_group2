import NewsList from "../NewsList/index"

export default function New () {
    return (
        <NewsList url={"https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"} />
    )
}