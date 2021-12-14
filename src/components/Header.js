import React from "react";
import App from "./App";
import blogData from "../data/blog";

function Header(props) {
    
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    )
}

export default Header;