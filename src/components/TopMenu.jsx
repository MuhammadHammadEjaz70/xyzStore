import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
const TopMenu = () => {
    return (<div>

        <ul>
            <li style={{ display: "inline", padding: "5px" }}><Link
                to="/">Home</Link>
            </li>
            <li style={{ display: "inline", padding: "5px" }}><Link to="/products">Products</Link></li>
            <li style={{ display: "inline", padding: "5px" }}><Link to="/contactus">Contact Us</Link></li>
        </ul>
    </div>);
}

export default TopMenu;
