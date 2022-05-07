import React from "react";
import PersonRow from "./PersonRow";
import {type} from "@testing-library/user-event/dist/type";
import BrokenRow from "../ErrorCatching/BrokenRow";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const MakePersonRows = (persons,deleteButtonHandler,editButtonHandler) => {


    const createPersonRow = (person) => {
        if(
            typeof person.id !== "number"
            ||
            person.firstName===""
            ||
            person.lastName===""
            ||
            typeof person.firstName !== "string"
            ||
            typeof person.lastName !== "string"
        )
            return(
                <BrokenRow
                    key={generateUniqueID}
                    // id={person.id}
                    firstName={person.firstName}
                    lastName={person.lastName}
                />
            )
        return (
            <PersonRow
                key={person.id}
                id={person.id}
                firstName={person.firstName}
                lastName={person.lastName}
                deleteButtonHandler = {deleteButtonHandler}
                editButtonHandler = {editButtonHandler}
            />
        )
    }

    return(
        <main>
            {persons.map(createPersonRow)}
        </main>
    )
}
export default MakePersonRows;