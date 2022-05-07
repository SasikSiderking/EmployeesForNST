import React from "react";
import api from "../v1";
import ErrorCatcher from "../../ErrorCatching/ErrorCatcher";
import ReqNotification from "../../ErrorCatching/ReqNotification";

const CustomPost = async (req,Person) => {
    let status=null;
    try {
        const response = await api.post(req,Person)
        status=response.status;
        ReqNotification(status)
    } catch(err) {
        ErrorCatcher(err,status)
    }
    return (status)
}
export default CustomPost