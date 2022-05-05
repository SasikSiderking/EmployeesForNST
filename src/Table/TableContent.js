import useCustomGet from "../api/useCustomGet";
import React from "react";
import "./table.css";
import MakePersonRows from "./MakePersonRows";
import ReqNotification from "../api/ReqNotification";

const TableContent = () => {

    const get = "/persons"

    const {data, status, loading} = useCustomGet(get);

    if (loading) return (
        <h1>Загрузка...</h1>
    )
    return (
        <>
            {
                MakePersonRows(data)
            }
            {ReqNotification(status)}
        </>
    )
}
export default TableContent;