import React from "react";
import Col from '../Col';
import './style.css';
import Row from '../Row';
import Mismo from './littlegardendog.jpg';

//introducing the little garden dog
function Header() {
    return (
        <Row>
            <div className = "introduction">
                <Col size = "md-4">  
                    <img src={Mismo} alt = {'Mismo the little garden dog'}/>
                </Col>
                <Col size = "md-10">
                    <h1>A Little Dog and a Garden Blog</h1>
                </Col>
            </div>
        </Row>
    
    )
}

export default Header;