import React from "react";
import "./styles.css";



function BookCard(props) {
    return (
        <div className="bookContainer">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
            <h2>{props.author}</h2>
            <h6>{props.description}</h6>

        </div>
    )



    
}


export default BookCard;

