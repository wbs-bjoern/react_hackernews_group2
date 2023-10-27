import { Link } from "react-router-dom";
import New from "../pages/New";
import Jobs from "../pages/Jobs";
import Past from "../pages/Past";


export default function Header () {

return (
<nav>
    <ul>
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/">Titel</Link></li>
        <li>
            <Link to="/New" element={<New />}>new</Link></li>
        {/* <li><Link to="/Past" element={<Past />}>past</Link></li> -> funktioniert noch nicht, daher erstmal raus genommen */}
        <li><Link to="/">comments</Link></li>
        <li><Link to="/">show</Link></li>
        <li><Link to="/Jobs" element={<Jobs />}>jobs</Link></li>
        <li><Link to="">submit</Link></li>
        <li><Link to="/">login</Link></li>
    </ul>

</nav>
);
};