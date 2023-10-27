import { Link } from "react-router-dom";
import New from "../../pages/New";
import Logo1 from "./Logo";
import Jobs from "../../pages/Jobs";
import Past from "../../pages/Past";
import Show from "../../pages/Show";
import Ask from "../../pages/Ask";


export default function Header() {

    return (
        <nav>
            <ul>
                <Logo1 />
                <li><Link className="link" to="/New" element={<New />}>new</Link></li>
                <li><Link className="link" to="/Past" element={<Past />}>past</Link></li>
                <li><Link className="link" to="/">comments</Link></li>
                <li><Link className="link" to="/Ask" element={<Ask />}>ask</Link></li>
                <li><Link className="link" to="/Show" element={<Show />}>show</Link></li>
                <li><Link to="/Jobs" element={<Jobs />}>jobs</Link></li>
                <li><Link className="link" to="">submit</Link></li>
                <li><Link className="link" to="/">login</Link></li>
            </ul>
        </nav>
    );
};
