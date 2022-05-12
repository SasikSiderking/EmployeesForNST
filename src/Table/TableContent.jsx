import React, { useState } from 'react';
import './table.css';
import PropTypes from 'prop-types';
import MakePersonRows from './MakePersonRows';
import Modal from '../ModalW/Modal';
import DeleteEmployeeForm from '../Forms/DeleteEmployeeForm';
import EditEmployeeForm from '../Forms/EditEmployeeForm';

function TableContent({ persons, loading }) {
  const [id, setId] = useState(-1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);

  const deleteButtonHandler = (chosenId, chosenFirstName, chosenLastName) => {
    setId(chosenId);
    setFirstName(chosenFirstName);
    setLastName(chosenLastName);
    setModalDeleteActive(true);
  };

  const editButtonHandler = (chosenId, chosenFirstName, chosenLastName) => {
    setId(chosenId);
    setFirstName(chosenFirstName);
    setLastName(chosenLastName);
    setModalEditActive(true);
  };

  if (loading) {
    return (
      <h1>Загрузка...</h1>
    );
  }
  return (
    <>
      {
        MakePersonRows({ persons, deleteButtonHandler, editButtonHandler })
            }
      <Modal
        active={modalDeleteActive}
        form={(
          <DeleteEmployeeForm
            id={id}
            firstName={firstName}
            lastName={lastName}
            setActive={setModalDeleteActive}
          />
)}
      />
      <Modal
        active={modalEditActive}
        form={(
          <EditEmployeeForm
            id={id}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            setActive={setModalEditActive}
          />
        )}
      />
    </>
  );
}

TableContent.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};
export default TableContent;
