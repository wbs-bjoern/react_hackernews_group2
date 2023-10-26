import NewsList from "../components/main/NewsList"

export default function Past() {
    return (
        <div>
            <p>Stories from ... .</p>
            <p>Go back a day, month, or year. Go forward a day.</p>
            <NewsList url={"http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i<1696507262"} showOL = {"none"} points={false} author={false} hide={false} past={false} comments={false} api={"agnolia"} />
        </div>
    )
}