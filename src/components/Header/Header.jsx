import { Link } from "react-router-dom";
import New from "../main/NewsPage/New";
import Logo1 from "./Logo";


export default function Header () {

return (
<nav>
    <ul>
        <Logo1 />
        <li><Link className="link" to="/New" element={<New />}>new</Link></li>
        <li><Link className="link" to="/">past</Link></li>
        <li><Link className="link" to="/">comments</Link></li>
        <li><Link className="link" to="/">show</Link></li>
        <li><Link className="link" to="/">jobs</Link></li>
        <li><Link className="link" to="">submit</Link></li>
        <li><Link className="link" to="/">login</Link></li>
    </ul>
</nav>
);
};