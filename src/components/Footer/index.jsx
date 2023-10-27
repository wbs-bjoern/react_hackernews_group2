import { Link } from "react-router-dom";


export default function Footer () {

return (
<nav className="navFooter" >
    <ul>
        <li><Link className="link" to="/"><a href="">Guidelines</a></Link></li>|
        <li><Link className="link" to="/"><a href="">FAQ</a></Link></li>|
        <li><Link className="link" to="/"><a href="">Lists</a></Link></li>|
        <li><Link className="link" to="/"><a href="">API</a></Link></li>|
        <li><Link className="link" to="/"><a href="">Security</a></Link></li>|
        <li><Link className="link" to="/"><a href="">Legal</a></Link></li>|
        <li><Link className="link" to="/"><a href="">Apply to YC</a></Link></li>|
        <li><Link className="link" to="/"><a href="">Contact</a></Link></li>
    </ul>
</nav>
);
};