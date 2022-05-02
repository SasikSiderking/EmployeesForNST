import React from "react";
import "./form.css"

const CreateEmployeeForm=({setActive}) => {
    return(
        <div className="Employee-Form-Wrapper">
            <header>Создание сотрудника</header>
            <div className="Form-Content">
                <button onClick={() => setActive(false)} className="Back-Button">Назад к списку</button>
                <input placeholder="Введите имя сотрудника"/>
                <input placeholder="Введите фамилию сотрудника"/>
                <button className="Save-Button">Сохранить</button>
            </div>
        </div>
    )
};
export default CreateEmployeeForm;