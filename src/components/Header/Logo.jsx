import logo from '/src/images/y18.svg';
import { Link } from "react-router-dom";



export default function Logo1 () {
    
return (   
<div className='flex'>
<Link className="link" to="/"><img className='logocss' src={logo}/></Link>
</div>
) 
}