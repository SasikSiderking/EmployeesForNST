import React from "react";
import api from "../v1";

const CustomPost = async (req,Person) => {
    let status=null;
    try {
        const response = await api.post(req,Person)
        status=response.status;
    } catch (err) {
        console.log("Error: " + err);
    }
    return (status)
}
export default CustomPost