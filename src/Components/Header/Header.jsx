import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav  className="route-container">
                <h2>This is my website</h2>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/contacts">Contact us</Link>
                    <Link to="/users">Users</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;