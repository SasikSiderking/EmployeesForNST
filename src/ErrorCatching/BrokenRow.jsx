import React from 'react';
import PropTypes from 'prop-types';
import icon from '../images/employee-square.png';

function BrokenRow({ firstName, lastName }) {
  return (
    <div className="List Content">
      <img src={icon} alt="icon" className="Employee-icon App-icon" />
      <p className="Employee-name">{firstName ? firstName.toString() : null}</p>
      <p className="Employee-second-name">{lastName ? lastName.toString() : null}</p>
      <small>Ошибка в записи</small>
      <div className="Functional-buttons" />
    </div>
  );
}

BrokenRow.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
export default BrokenRow;
