import icon from "../images/employee-square.png";
import React from "react";

const BrokenRow = (props) => {
    return(
        <div className="List Content">
            <img src={icon} alt="icon" className="Employee-icon App-icon"/>
            <p className="Employee-name">{props.firstName? props.firstName.toString() : null}</p>
            <p className="Employee-second-name">{props.lastName? props.lastName.toString() : null}</p>
            <small>Ошибка в записи</small>
            <div className="Functional-buttons">
            </div>
        </div>
    )
}
export default BrokenRow