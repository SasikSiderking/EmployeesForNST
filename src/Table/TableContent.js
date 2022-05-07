import React, {useState} from "react";
import "./table.css";
import MakePersonRows from "./MakePersonRows";
import Modal from "../ModalW/Modal";
import DeleteEmployeeForm from "../forms/DeleteEmployeeForm";
import EditEmployeeForm from "../forms/EditEmployeeForm";

const TableContent = ({persons,loading}) => {

    const [id,setId] = useState(null);
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[modalDeleteActive, setModalDeleteActive] = useState(false);
    const[modalEditActive, setModalEditActive] = useState(false);

    const deleteButtonHandler = (id,firstName,lastName) => {
        setId(id);
        setFirstName(firstName);
        setLastName(lastName);
        setModalDeleteActive(true);
    }

    const editButtonHandler = (id,firstName,lastName) => {
        setId(id);
        setFirstName(firstName);
        setLastName(lastName);
        setModalEditActive(true);
    }

    if (loading) return (
        <h1>Загрузка...</h1>
    )
    return (
        <>
            {
                MakePersonRows(persons,deleteButtonHandler,editButtonHandler)
            }
            <Modal active={modalDeleteActive} form={<DeleteEmployeeForm id={id} firstName={firstName} lastName={lastName} setActive={setModalDeleteActive}/>}/>
            <Modal active={modalEditActive} form={<EditEmployeeForm id={id} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} setActive={setModalEditActive}/>}/>
        </>
    )
}
export default TableContent;