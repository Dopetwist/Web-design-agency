import React from "react";


function Card(props) {
    return (
        <div className="layout">
            <img src={props.image} alt="Service Image" />
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;