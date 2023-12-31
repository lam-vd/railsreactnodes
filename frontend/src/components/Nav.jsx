import React from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return <header>
        <h1> Lamvd Note</h1>
        <nav>
            <Link to="/"><div>Home</div></Link>
            <Link to="/auth/signup"><div>Home</div></Link>
            <Link to="/auth/login"><div>Home</div></Link>
        </nav>
    </header>
};

export default Nav;