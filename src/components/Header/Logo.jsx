import logo from '/src/images/y18.svg';
import { Link } from "react-router-dom";



export default function Logo1 () {
    
return (   
<>
<li><Link className="link" to="/"><img className='logocss' src={logo}/></Link></li>
<li className='title'><Link className="link" to="/">Hacker News</Link></li>
</>
) 
}