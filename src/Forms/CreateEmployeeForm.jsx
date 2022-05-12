import React, { useContext, useState } from 'react';
import './form.css';
import PropTypes from 'prop-types';
import NetworkRequest from '../api/NetworkRequest';
import PersonContext from '../Context/PersonContext';

function CreateEmployeeForm({ setActive }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [persons, setPersons] = useContext(PersonContext);
  const id = persons.length ? persons[persons.length - 1].id + 1 : 1;
  const Person = { id, firstName, lastName };

  const handlePost = async (e) => {
    e.preventDefault();
    await NetworkRequest('post', Person);
    setPersons([...persons, Person]);
    setFirstName('');
    setLastName('');
    setActive(false);
  };

  return (
    <form className="Employee-Form-Wrapper" onSubmit={handlePost}>
      <header>Создание сотрудника</header>
      <div className="Form-Content">
        <button type="button" onClick={() => { setActive(false); }} className="Back-Button">Назад к списку</button>
        <input
          type="text"
          placeholder="Введите имя сотрудника"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите фамилию сотрудника"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="Save-Button">Сохранить</button>
      </div>
    </form>
  );
}

CreateEmployeeForm.propTypes = {
  setActive: PropTypes.func.isRequired,
};
export default CreateEmployeeForm;
