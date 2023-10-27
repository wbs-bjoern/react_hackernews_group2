import { Link } from "react-router-dom"
import AuthorDetails from "../../author"

export default function Author ({showAuthor, by}) {
    if (showAuthor && by) {
        return <Link className="link" to={`/Author?${by}`} element={<AuthorDetails key={by} username="schappim" />} state={{username:"schappim"}}>by {by} </Link>
    }
}