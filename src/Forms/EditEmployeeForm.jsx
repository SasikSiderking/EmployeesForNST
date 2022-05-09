import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NetworkRequest from '../api/NetworkRequest';
import PersonContext from '../Context/PersonContext';

function EditEmployeeForm({
  setActive, id, firstName, setFirstName, lastName, setLastName,
}) {
  const [persons, setPersons] = useContext(PersonContext);
  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedPerson = { undefined, firstName, lastName };
    const responseData = await NetworkRequest('put', updatedPerson, id);
    if (responseData !== undefined) {
      setPersons(persons.map((person) => (person.id === id ? { ...responseData } : person)));
    }
  };

  return (
    <form className="Employee-Form-Wrapper" onSubmit={(e) => handleEdit(e, id, firstName, lastName)}>
      <header>Редактирование сотрудника</header>
      <div className="Form-Content">
        <button type="button" onClick={(e) => { e.preventDefault(); setActive(false); }} className="Back-Button">Назад к списку</button>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="Save-Button">Сохранить</button>
      </div>
    </form>
  );
}

EditEmployeeForm.propTypes = {
  setActive: PropTypes.func.isRequired,
  id: PropTypes.number,
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  setLastName: PropTypes.func.isRequired,
};
EditEmployeeForm.defaultProps = {
  id: undefined,
};

export default EditEmployeeForm;
