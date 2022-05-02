import React from "react";
import "./modal.css";

const Modal = ({active,form}) => {
    return (
        <div className={ active ? "ModalBackground active" : "ModalBackground" }>
            <div className={ active ? "ModalContent active" : "ModalContent" }>
                {form}
            </div>
        </div>
    )
};
export default Modal;