import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './style.css';

function Navbar() {
    return (
        <div className ="dropdown">
            <button className ="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Past posts</a>
                <a className="dropdown-item" href="#">Product Reviews</a>
                <a className="dropdown-item" href="#">My favorite things</a>
                <a className="dropdown-item" href="#">Pictures of a little dog</a>
            </div>
        </div>
    )
}

export default Navbar;