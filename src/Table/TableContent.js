import useCustomGet from "../api/useCustomGet";
import React, {useState} from "react";
import "./table.css";
import MakePersonRows from "./MakePersonRows";
import ReqNotification from "../api/ReqNotification";
import {ToastContainer} from "react-toastify";
import {get} from "../api/v1";

const TableContent = () => {

    const {data, status, loading} = useCustomGet(get);

    if (loading) return (
        <h1>Загрузка...</h1>
    )

    return (
        <>
            {
                MakePersonRows(data)
            }
            <ToastContainer/>
            {ReqNotification(status)}
        </>
    )
}
export default TableContent;