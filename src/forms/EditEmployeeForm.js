import React, {useContext} from "react";
import NetworkRequest from "../api/NetworkRequest";
import PersonContext from "../Context/PersonContext";

const EditEmployeeForm = ({setActive,id,firstName,setFirstName,lastName,setLastName}) => {

    const {persons,setPersons} = useContext(PersonContext);

    const handleEdit = async (e,id,firstName,lastName) => {
        e.preventDefault();
        const updatedPerson = {id,firstName:firstName,lastName:lastName};
        const responseData = await NetworkRequest("put",updatedPerson);
        if (responseData === undefined){
            setPersons(persons.map(person => person.id === id ? {...responseData} : person));
        }
    }

    return(
        <form className="Employee-Form-Wrapper" onSubmit={(e) => handleEdit(e,id,firstName,lastName)}>
            <header>Редактирование сотрудника</header>
            <div className="Form-Content">
                <a onClick={() => {setActive(false)}} className="Back-Button">Назад к списку</a>
                <input autoFocus type="text" required
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                />
                <input type="text" required
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit" className="Save-Button">Сохранить</button>
            </div>
        </form>
    )
}
export default EditEmployeeForm