import React from "react";
import "./table.css";
import MakePersonRows from "./MakePersonRows";

const TableContent = ({persons,loading}) => {

    if (loading) return (
        <h1>Загрузка...</h1>
    )
    return (
        <>
            {
                MakePersonRows(persons)
            }
        </>
    )
}
export default TableContent;