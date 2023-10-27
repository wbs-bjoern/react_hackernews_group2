import NewsList from "../components/main/NewsList"

export default function Jobs() {
    return (
        // <div>
        <>
            <p>These are jobs at YC startups. See more at <a href="https://www.ycombinator.com/jobs">ycombinator.com/jobs</a>.</p>
            <NewsList url={"https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty"} showOL = {"none"} points={false} author={false} hide={false} past={false} comments={false} />
            </>
        // </div>
    )
}