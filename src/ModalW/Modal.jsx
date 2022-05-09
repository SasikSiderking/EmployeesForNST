import React from 'react';
import './modal.css';
import * as propTypes from 'prop-types';

function Modal({ active, form }) {
  return (
    <div className={active ? 'ModalBackground active' : 'ModalBackground'}>
      <div className={active ? 'ModalContent active' : 'ModalContent'}>
        {form}
      </div>
    </div>
  );
}

Modal.propTypes = {
  active: propTypes.bool.isRequired,
  form: propTypes.element.isRequired,
};
export default Modal;
