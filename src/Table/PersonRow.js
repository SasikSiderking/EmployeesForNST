import React from "react";
import icon from "../images/employee-square.png";
import edit from "../images/edit.png";
import del from "../images/delete.png";

const PersonRow = (props) => {
    return(
        <div className="List Content">
            <img src={icon} alt="icon" className="Employee-icon App-icon"/>
            <p className="Employee-name">{props.firstName}</p>
            <p className="Employee-second-name">{props.lastName}</p>
            <div className="Functional-buttons">
                <button className="Edit-button" type="button"><img src={edit} alt="edit" className="App-icon"/>
                </button>
                <button className="Delete-button" type="button"><img src={del} alt="delete" className="App-icon"/>
                </button>
            </div>
        </div>
    )
}
export default PersonRow;