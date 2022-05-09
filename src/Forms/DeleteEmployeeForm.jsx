import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NetworkRequest from '../api/NetworkRequest';
import PersonContext from '../Context/PersonContext';

function DeleteEmployeeForm({
  id, firstName, lastName, setActive,
}) {
  const [persons, setPersons] = useContext(PersonContext);

  const handleDelete = async (e) => {
    e.preventDefault();
    const Person = { id, firstName: null, lastName: null };
    const responseData = await NetworkRequest('delete', Person);
    if (responseData !== undefined) {
      const newPersons = persons.filter((person) => person.id !== id);
      setPersons(newPersons);
    }
  };

  return (
    <form className="Employee-Form-Wrapper" onSubmit={(e) => handleDelete(e, id)}>
      <header>Удаление сотрудника</header>
      <div className="Form-Content">
        <button type="button" onClick={() => { setActive(false); }} className="Back-Button">Назад к списку</button>
        <p>
          Вы уверены, что хотите удалить сотрудника?
          <strong>
            {firstName}
            {' '}
            {lastName}
          </strong>
        </p>
        <button type="submit" className="Save-Button">Удалить</button>
      </div>
    </form>
  );
}
DeleteEmployeeForm.propTypes = {
  setActive: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
export default DeleteEmployeeForm;
