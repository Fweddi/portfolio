import React from "react";

import { NavBar, NavLink, NavHeading } from "./styles/Navigation.style.js";

const Navigation = () => {
    return (
        <NavBar>
            <NavHeading>Fweddi</NavHeading>
            <div>
                <NavLink href="#about">About Me</NavLink>
                <NavLink href="#projects">Projects</NavLink>
            </div>
        </NavBar>
    );
}

export default Navigation;
