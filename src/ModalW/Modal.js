import React from "react";
import "./modal.css";

const Modal = ({active,setActive}) => {
    return (
        <div className={ active ? "ModalBackground active" : "ModalBackground" } onClick={() => setActive(false)}>
            <div className="ModalContent" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
};

export default Modal;