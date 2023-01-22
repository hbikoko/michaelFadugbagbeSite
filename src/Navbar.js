import './CSS_Files/styles.css';
import { Link } from 'react-router-dom';

//giving each thing a class helps us be able to style it in CSS specifically
function Navbar() {
    return <nav className="navClass">
        <link rel="stylesheet" href="styles.css" />
        <div>
                <Link className="site-name" to="/">Michael Fadugbagbe</Link> 
        </div>
        <div>
                <Link className="insta-name" to="/instagram" >Instagram</Link>
        </div>
        <div>
                <Link className="bio-name" to="/bio"> Bio</Link>
        </div>
        </nav>
        
    
}

export default Navbar;
