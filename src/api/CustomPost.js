import React from "react";
import api from "./v1";

async function CustomPost(req,firstName,lastName) {
    const Person = {firstName: firstName,lastName: lastName}
    let status=null;

    try {
        const response = await api.post(req,Person)
        status=response.status;
        console.log(status);
    } catch (err) {
        console.log("Error: " + err);
    }
    return(
        status
    )
}
export default CustomPost