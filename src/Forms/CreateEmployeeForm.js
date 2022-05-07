import React, {useContext, useState} from "react";
import "./form.css";
import NetworkRequest from "../api/NetworkRequest";
import PersonContext from "../Context/PersonContext";

const CreateEmployeeForm=({setActive}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const {persons,setPersons} = useContext(PersonContext);
    const id = persons.length ? persons[persons.length - 1].id + 1 : 1;
    const Person = {id,firstName: firstName,lastName: lastName}

    const handlePost = async (e) => {
        e.preventDefault();
        await NetworkRequest("post",Person);
        setPersons([...persons,Person])
        setFirstName("");
        setLastName("");
    }

    return(
        <form className="Employee-Form-Wrapper" onSubmit={handlePost}>
            <header>Создание сотрудника</header>
            <div className="Form-Content">
                <a onClick={() => {setActive(false)}} className="Back-Button">Назад к списку</a>
                <input autoFocus type="text" placeholder="Введите имя сотрудника" required
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                />
                <input type="text" placeholder="Введите фамилию сотрудника" required
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit" className="Save-Button">Сохранить</button>
            </div>
        </form>
    )
};
export default CreateEmployeeForm;