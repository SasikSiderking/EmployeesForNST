import React, {useState} from "react";
import "./table.css";
import MakePersonRows from "./MakePersonRows";
import Modal from "../ModalW/Modal";
import DeleteEmployeeForm from "../forms/DeleteEmployeeForm";

const TableContent = ({persons,loading}) => {

    const [id,setId] = useState(null);
    const[firstName,setFirstName] = useState(null);
    const[lastName,setLastName] = useState(null);
    const[modalActive, setModalActive] = useState(false);

    const deleteButtonHandler = (id,firstName,lastName) => {
        setId(id);
        setFirstName(firstName);
        setLastName(lastName);
        setModalActive(true);
    }

    if (loading) return (
        <h1>Загрузка...</h1>
    )
    return (
        <>
            {
                MakePersonRows(persons,deleteButtonHandler)
            }
            <Modal active={modalActive} form={<DeleteEmployeeForm id={id} firstName={firstName} lastName={lastName} setActive={setModalActive}/>}/>
        </>
    )
}
export default TableContent;