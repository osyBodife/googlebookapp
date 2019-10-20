import React from "react";
import "./style.css";

function SearchArea(props) {
    return (
        <div className="search-area">
            <div className="img-container">

                <img alt={props.name} src={props.image} id={props.id} />

            </div>
            <div className="text-container">
This is my text area

            </div>


        </div>
    );
}

export default SearchArea;