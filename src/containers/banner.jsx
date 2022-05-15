import React from "react";

import"../styles/banner.css"



const Banner = () => {
    return(
        <div className="banner">
            <button className="banner--arrow banner--arrow__left"></button>
            <button className="banner--arrow banner--arrow__right"></button>
            <h2 className="banner--title">Aqui va estar el texto de banner</h2>
            <p className="banner--description">Este es el texto de las descripción</p>
            <button className="banner--btn">View More</button>
        </div>
    )
}

export default Banner;