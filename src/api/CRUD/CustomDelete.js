import React from "react";
import api from "../v1";

const CustomDelete = async (req,id) => {
    let status = null;
    try{
        const response = await api.delete(req+"/"+id);
        status = response.status;
    }
    catch (err){
        console.log("Error: "+err.message);
    }

    return(status)
}
export default CustomDelete