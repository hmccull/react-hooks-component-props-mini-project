import React from "react";

function Header({ name }) {
    console.log('FROM HEADER: ', name)
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;