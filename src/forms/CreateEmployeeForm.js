import React, {useState} from "react";
import "./form.css"
import ReqNotification from "../api/ReqNotification";
import CustomPost from "../api/CustomPost";

const CreateEmployeeForm=({setActive}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const status = await CustomPost("/persons", firstName, lastName);
        ReqNotification(status);
    }

    return(
        <form className="Employee-Form-Wrapper" onSubmit={handleSubmit}>
            <header>Создание сотрудника</header>
            <div className="Form-Content">
                <a onClick={() => {setActive(false)}} className="Back-Button">Назад к списку</a>
                <input autoFocus id type="text" placeholder="Введите имя сотрудника" required
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                />
                <input id type="text" placeholder="Введите фамилию сотрудника" required
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit" className="Save-Button">Сохранить</button>
            </div>
        </form>
    )
};
export default CreateEmployeeForm;