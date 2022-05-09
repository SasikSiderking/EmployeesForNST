import React from 'react';
import PropTypes from 'prop-types';
import icon from '../images/employee-square.png';
import edit from '../images/edit.png';
import del from '../images/delete.png';

function PersonRow({
  id, firstName, lastName, editButtonHandler, deleteButtonHandler,
}) {
  return (
    <div className="List Content">
      <img src={icon} alt="icon" className="Employee-icon App-icon" />
      <p className="Employee-name">{firstName}</p>
      <p className="Employee-second-name">{lastName}</p>
      <div className="Functional-buttons">
        <button
          className="Edit-button"
          onClick={() => { editButtonHandler(id, firstName, lastName); }}
          type="button"
        >
          <img src={edit} alt="edit" className="App-icon" />
        </button>
        <button
          className="Delete-button"
          onClick={() => {
            deleteButtonHandler(id, firstName, lastName);
          }}
          type="button"
        >
          <img src={del} alt="delete" className="App-icon" />
        </button>
      </div>
    </div>
  );
}

PersonRow.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  editButtonHandler: PropTypes.func.isRequired,
  deleteButtonHandler: PropTypes.func.isRequired,
};
export default PersonRow;
