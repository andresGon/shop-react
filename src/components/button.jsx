import React, { useState } from "react";
import "../styles/button.css"

function Button (props){
    const [text, setText] = useState('');
    return (
        <button>{props.text}</button>
    );
}

export default Button;