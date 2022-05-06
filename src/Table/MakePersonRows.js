import React, {useState} from "react";
import PersonRow from "./PersonRow";

const MakePersonRows = (persons) => {

    const createPersonRow = (person) => {
        return (
            <PersonRow
                key={person.id}
                firstName={person.firstName}
                lastName={person.lastName}
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