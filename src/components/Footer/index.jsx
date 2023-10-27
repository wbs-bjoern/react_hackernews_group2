import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

export default function Footer () {

return (
    <>
<nav className="navFooter" >
    <ul>
        <li><Link className="link" to="/"><a href="">Guidelines&nbsp;</a></Link>|</li>
        <li><Link className="link" to="/"><a href="">FAQ&nbsp;</a></Link>|</li>
        <li><Link className="link" to="/"><a href="">Lists&nbsp;</a></Link>|</li>
        <li><Link className="link" to="/"><a href="">API&nbsp;</a></Link>|</li>
        <li><Link className="link" to="/"><a href="">Security&nbsp;</a>|</Link></li>
        <li><Link className="link" to="/"><a href="">Legal&nbsp;</a></Link>|</li>
        <li><Link className="link" to="/"><a href="">Apply to YC&nbsp;</a>|</Link></li>
        <li><Link className="link" to="/"><a href="">Contact&nbsp;</a></Link></li>
    </ul>
</nav>
<SearchBar />
</>


);
};