import React from "react";
import "./table.css";
import icon from "../images/employee-square.png";
import edit from "../images/edit.png";
import del from "../images/delete.png";

const TableContent = () => {
    return (
        <div>
            <div className="List Content">
                <img src={icon} alt="icon" className="Employee-icon App-icon"/>
                <p className="Employee-name">Имя</p>
                <p className="Employee-second-name">Фамилия</p>
                <div className="Functional-buttons"><button className="Edit-button" type="button"><img src={edit} alt="edit" className="App-icon"/></button>
                    <button className="Delete-button" type="button"><img src={del} alt="delete" className="App-icon"/></button></div>
            </div>
            <div className="List Content">
                <img src={icon} alt="icon" className="Employee-icon App-icon"/>
                <p className="Employee-name">Имя</p>
                <p className="Employee-second-name">Фамилия</p>
                <div className="Functional-buttons"><button className="Edit-button" type="button"><img src={edit} alt="edit" className="App-icon"/></button>
                    <button className="Delete-button" type="button"><img src={del} alt="delete" className="App-icon"/></button></div>
            </div>
        </div>
    )
}
export default TableContent;