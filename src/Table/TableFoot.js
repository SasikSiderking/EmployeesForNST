import React, {useState} from "react";
import "./table.css";
import Modal from "../ModalW/Modal";
import CreateEmployeeForm from "../Forms/CreateEmployeeForm";
const TableFoot = () => {
    const[modalActive, setModalActive] = useState(false);
    return (
        <div className="Foot">
            <button onClick={() => setModalActive(true)}>Добавить сотрудника</button>
            <Modal active={modalActive} form={<CreateEmployeeForm setActive={setModalActive}/>}/>
        </div>
    )
}
export default TableFoot;