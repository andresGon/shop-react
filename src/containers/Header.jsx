import React from "react";
import Button from "../components/button";
import "../styles/header.css"

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <h1>Amazon clone</h1>
                <Button  text={"Todays Deals"}/>
                <Button  text={"Gift Cards"}/>
                <Button text={"Registry & Gifting"}/>
            </header>
        </React.Fragment>
        
    );
}

export default Header;