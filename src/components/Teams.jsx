import React from "react";

const Teams = (props) => {
    return (
        <div className="teamCard">
            <img class="teamLogo" src={props.image}></img>
            <h3>{props.name}</h3>
            <h4>{props.country}</h4>
            <a href={props.link}>
                <button>Team Page</button>
            </a>
        </div>
    )
}

export default Teams;