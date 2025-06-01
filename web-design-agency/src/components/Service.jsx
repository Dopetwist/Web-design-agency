import React from "react";
import Card from "./Card";
import services from "../index";

function displayCard(card) {
    return(
        <Card 
            id={card.id}
            key={card.id}
            image={card.image}
            heading={card.title}
            description={card.detail}
        />
    )
}

function Service() {
    return (
        <section className="services" id="service">
            <h2 className="heading">Our Services</h2>
            <div className="img-layout">
                {services.map(displayCard)}
            </div>
        </section>
    )
}

export default Service;