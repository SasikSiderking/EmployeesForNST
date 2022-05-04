import React, {useEffect, useState} from "react";
import "./table.css";
import PersonRow from "./PersonRow";

const TableContent = () => {
    const url = 'http://localhost:9000/persons';

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(url);
                // console.log(response.status);
                const listItems = await response.json();
                setPersons(listItems);
            } catch (err) {
                console.log(err);
            }
        }
        (async () => await fetchItems())();
    }, [])
    const createPersonRow = (person) => {
        return (
            <PersonRow
                key={person.id}
                firstName={person.firstName}
                lastName={person.lastName}
            />
        )
    }

    return (
        <div>
            {
                persons.map(createPersonRow)
            }
        </div>
    )
}
export default TableContent;