import React from "react";
import "./table.css";

const TableHead = () => {
    return (
        <header className="List Head">
            <div className="First-Name">
                Имя
            </div>
            <div className="Second-Name">
                Фамилия
            </div>
            <div className="Functional-Buttons">
                {/*Действие*/}
            </div>
        </header>
    )
}
export default TableHead;