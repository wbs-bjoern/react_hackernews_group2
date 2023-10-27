import NewsList from "../components/main/NewsList"

export default function Show() {
    return (
        <div>
            <p className="mainDesc">Please read the rules. You can also browse the newest Show HNs.</p>
            <NewsList url={"https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty"} hide={false} past={false}/>
        </div>
    )
}