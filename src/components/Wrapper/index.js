import React from "react";

//pokemon are caught in a pokeball, so this is the wrapper for the game
function Wrapper (props) {
    return <div className = "wrapper">
        {props.children}
    </div>;
}

export default Wrapper;