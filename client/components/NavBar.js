import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
 
  render() {
    return (
            <div className="navbar-fixed">
                <nav>
                <div className="nav-wrapper blue-grey">
                    <Link to="/" className="brand-logo">React-Cart</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/signup"> Login </Link> </li>
                    </ul>
                </div>
                </nav>
            </div>

        )
  }
};

export default NavBar;