import React from "react";
import api from "../v1";
import ReqNotification from "../../ErrorCatching/ReqNotification";
import ErrorCatcher from "../../ErrorCatching/ErrorCatcher";

const CustomDelete = async (req,id) => {
    let responseData = undefined;
    let status = undefined;
    try{
        const response = await api.delete(req+"/"+id);
        status = response.status;
        ReqNotification(status);
        responseData=response.data;
    }
    catch(err)
    {
       ErrorCatcher(err,status);
    }

    return{responseData}
}
export default CustomDelete