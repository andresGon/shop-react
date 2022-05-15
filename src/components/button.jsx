import React, { useState } from "react";
import "../styles/button.css"

function Button (props){
    return (
        <button>{props.text}</button>
    );
}

export default Button;