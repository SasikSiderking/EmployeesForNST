import React from "react";
import PersonRow from "./PersonRow";

const MakePersonRows = (data) => {


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
            {data.map(createPersonRow)}
        </main>
    )
}
export default MakePersonRows;