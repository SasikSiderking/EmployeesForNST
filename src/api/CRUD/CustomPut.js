import React from "react";
import api from "../v1";
import ErrorCatcher from "../../ErrorCatching/ErrorCatcher";
import ReqNotification from "../../ErrorCatching/ReqNotification";

const CustomPut = async (req,updatedPerson) => {
    let responseData = undefined;
    let status = undefined;
    const id = updatedPerson.id;
    updatedPerson.id=null;
    try {
        const response = await api.put(req+"/"+id,updatedPerson);
        status=response.status;
        ReqNotification(status);
        responseData=response.data;
    }
    catch(err)
    {
       ErrorCatcher(err,status);
    }
    return {responseData}
}
export default CustomPut