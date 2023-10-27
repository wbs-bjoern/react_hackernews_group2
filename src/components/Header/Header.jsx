import { Link } from "react-router-dom";
import New from "../../pages/New";
import Logo1 from "./Logo";
import Jobs from "../../pages/Jobs";
import Past from "../../pages/Past";
import Show from "../../pages/Show";
import Title from "./Title";
import Login from "./Login"
import Ask from "../../pages/Ask";


export default function Header() {


return (
<nav>
<div className="navContainer">
    <Logo1 />
    
    
    <div className="flex">
    <Title />
    <ul>
        <li><Link className="link" to="/New" element={<New />}>new&nbsp;</Link>|</li>
        <li><Link className="link" to="/Past" element={<Past />}>past&nbsp;</Link>|</li>
        <li><Link className="link" to="/">comments&nbsp;</Link>|</li>
        <li><Link className="link" to="/Ask" element={<Ask />}>ask&nbsp;</Link>|</li>
        <li><Link className="link" to="/Show" element={<Show />}>show&nbsp;</Link>|</li>
        <li><Link to="/Jobs" element={<Jobs />}>jobs&nbsp;</Link>|</li>
        <li><Link className="link" to="">submit</Link></li>
    </ul>
    </div>
    </div>
    <Login />
</nav>
);

};
