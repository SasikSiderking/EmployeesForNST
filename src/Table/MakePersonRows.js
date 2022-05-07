import React from "react";
import PersonRow from "./PersonRow";

const MakePersonRows = (persons,deleteButtonHandler,editButtonHandler) => {


    const createPersonRow = (person) => {
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