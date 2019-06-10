import React from "react";

import { NavBar, NavLink, NavHeading, NavSound } from "./styles/Navigation.style.js";

const Navigation = () => {
    return (
        <NavBar>
            <NavHeading href="#header">Freddie</NavHeading>
            {/* <NavSound>sound: on</NavSound> */}
            <div>
                <NavLink href="#about">About Me</NavLink>
                <NavLink href="#projects">Projects</NavLink>
            </div>
        </NavBar>
    );
}

export default Navigation;
