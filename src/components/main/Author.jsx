import { useEffect, useState } from "react"

export default function AuthorDetails({ username }) {
    // Das mit dem Übergeben des username klappt leider noch nicht.
    const url = `https://hacker-news.firebaseio.com/v0/user/schappim.json`
    const [authorData, setAuthorData] = useState()

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setAuthorData(data))
    }, [])

    const getDate = () => {
        const date = new Date(authorData?.created * 1000)
        return date.toDateString()
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>user:</td>
                    <td>{authorData?.id}</td>
                </tr>
                <tr>
                    <td>created:</td>
                    <td>{getDate()}</td>
                </tr>
                <tr>
                    <td>karma:</td>
                    <td>{authorData?.karma}</td>
                </tr>
                <tr>
                    <td>about:</td>
                    <td>
                        <p>{authorData?.about}</p>
                        <p><a href="">submissions</a></p>
                        <p><a href="">comments</a></p>
                        <p><a href="">favorites</a></p>
                    </td>
                </tr>
            </tbody>
        </table>
    )

}