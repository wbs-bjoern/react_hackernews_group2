import NewsList from "../components/main/NewsList"

export default function Ask() {
    return (
        <div>
            <NewsList url={"https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"} hide={false} past={false} source={false}/>
        </div>
    )
}