import React from "react";
import api from "../v1";
import ReqNotification from "../../ErrorCatching/ReqNotification";

const CustomGet = async (req,id) => {
    let data = [];

    try{
        const response = await api.get(req? req+"/"+id : req);
        if(response && response.data){
            data = response.data;
            // ReqNotification(status);
        }
    }
    catch(err){
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }
        else{
            // ReqNotification(status);
            console.log("Error: "+err)
        }
    }

    return (data);
}

export default CustomGet;