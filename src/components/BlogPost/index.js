import React from "react";
import "./style.css"
import Col from "../Col"


//blog post from the json object
function BlogPost(props) {
    return (
        <Col size = "md-8">
            <h2>{props}</h2>,
            <p>{props}</p>
        </Col>
       
    );
}

export default BlogPost;