import NewsList from "../NewsList/index"

export default function Jobs() {
    return (
        <div>
            <p>These are jobs at YC startups. See more at ycombinator.com/jobs.</p>
            <NewsList url={"https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty"} showOL = {"none"} />
        </div>
    )
}