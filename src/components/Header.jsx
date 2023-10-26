import { Link } from "react-router-dom";
import New from "../pages/New";
import Jobs from "../pages/Jobs";


export default function Header () {

return (
<nav>
    <ul>
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/">Titel</Link></li>
        <li>
            <Link to="/New" element={<New />}>new</Link></li>
        <li><Link to="/">past</Link></li>
        <li><Link to="/">comments</Link></li>
        <li><Link to="/">show</Link></li>
        <li><Link to="/Jobs" element={<Jobs />}>jobs</Link></li>
        <li><Link to="">submit</Link></li>
        <li><Link to="/">login</Link></li>
    </ul>

</nav>
);
};