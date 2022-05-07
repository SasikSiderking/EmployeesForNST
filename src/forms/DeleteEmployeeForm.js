import React, {useContext} from "react";
import NetworkRequest from "../api/NetworkRequest";
import ReqNotification from "../api/ReqNotification";
import PersonContext from "../Context/PersonContext";

const DeleteEmployeeForm = ({id,firstName,lastName,setActive}) => {
    const {persons,setPersons} = useContext(PersonContext);

    const handleDelete = async (e,id) => {
        e.preventDefault();
        const status = await NetworkRequest("delete",null,null,id);
        ReqNotification(status);
        const newPersons = persons.filter(person => person.id !== id);
        setPersons(newPersons)
    }

    return(
        <form className="Employee-Form-Wrapper" onSubmit={(e) => handleDelete(e,id)}>
            <header>Удаление сотрудника</header>
            <div className="Form-Content">
                <a onClick={() => {setActive(false)}} className="Back-Button">Назад к списку</a>
                <p>Вы уверены, что хотите удалить сотрудника?<strong>{firstName}{" "}{lastName}</strong></p>
                <button type="submit" className="Save-Button">Удалить</button>
            </div>
        </form>
    )
}
export default DeleteEmployeeForm