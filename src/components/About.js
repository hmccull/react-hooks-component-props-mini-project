import React from "react";
import App from "./App";

function About({ image="https://via.placeholder.com/215", about }) {
    console.log('from About: ', about)

    return (
        <aside>
            <img src={image} alt='blog logo' />
            <p>{about}</p>
        </aside>
    )
}

export default About;