import { Link } from "react-router-dom";


export default function Footer () {

return (
<nav className="navFooter" style={{borderTop: "2px orange solid"}}>
    <ul>
        <li><Link className="link" to="/">Guidelines</Link></li>
        <li><Link className="link" to="/">FAQ</Link></li>
        <li><Link className="link" to="/">Lists</Link></li>
        <li><Link className="link" to="/">API</Link></li>
        <li><Link className="link" to="/">Security</Link></li>
        <li><Link className="link" to="/">Legal</Link></li>
        <li><Link className="link" to="/">Apply to YC</Link></li>
        <li><Link className="link" to="/">Contact</Link></li>
    </ul>
</nav>
);
};