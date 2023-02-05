import './Header.css';
import { Link } from "react-router-dom";
import logo from '../logo.png';

function Header() {
  return (
    <div className="Header">
      <div className="Icon">
        <img src={logo} className="header-logo" alt="logo" />
      </div>
      <div className="about">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;