import React from "react";
import PersonRow from "./PersonRow";

const MakePersonRows = (persons,deleteButtonHandler) => {


    const createPersonRow = (person) => {
        return (
            <PersonRow
                key={person.id}
                id={person.id}
                firstName={person.firstName}
                lastName={person.lastName}
                deleteButtonHandler = {deleteButtonHandler}
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