import React from 'react';
import { generateUniqueID } from 'web-vitals/dist/modules/lib/generateUniqueID';
import PropTypes from 'prop-types';
import PersonRow from './PersonRow';
import BrokenRow from '../ErrorCatching/BrokenRow';

function MakePersonRows({ persons, deleteButtonHandler, editButtonHandler }) {
  const createPersonRow = (person) => {
    if (
      typeof person.id !== 'number'
            || person.firstName === ''
            || person.lastName === ''
            || typeof person.firstName !== 'string'
            || typeof person.lastName !== 'string'
    ) {
      return (
        <BrokenRow
          key={generateUniqueID}
                    // id={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
        />
      );
    }
    return (
      <PersonRow
        key={person.id}
        id={person.id}
        firstName={person.firstName}
        lastName={person.lastName}
        deleteButtonHandler={deleteButtonHandler}
        editButtonHandler={editButtonHandler}
      />
    );
  };

  return (
    <main>
      {/* eslint-disable-next-line react/prop-types */}
      {persons.map(createPersonRow)}
    </main>
  );
}

MakePersonRows.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })).isRequired,
  deleteButtonHandler: PropTypes.func.isRequired,
  editButtonHandler: PropTypes.func.isRequired,
};
export default MakePersonRows;
