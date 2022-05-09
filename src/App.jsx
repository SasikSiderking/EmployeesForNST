import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import TableHead from './Table/TableHead';
import TableContent from './Table/TableContent';
import TableFoot from './Table/TableFoot';
import ReqNotification from './ErrorCatching/ReqNotification';
import PersonContext from './Context/PersonContext';
import api, { getReq } from './api/v1';
import ReqErrorCatcher from './ErrorCatching/ReqErrorCatcher';

function App() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]);
  const memorizedPersons = useMemo(() => [persons, setPersons], [persons]);

  useEffect(() => {
    const getPersons = async () => {
      try {
        const response = await api.get(getReq);
        if (response && response.data) {
          setStatus(response.status);
          setPersons(response.data);
          ReqNotification(response.status);
        }
      } catch (err) {
        ReqErrorCatcher(err);
      }
      setLoading(false);
    };
    getPersons();
  }, []);

  return (
    <div className="App">

      <div className="Employees-Wrapper">

        <TableHead />

        <PersonContext.Provider value={
          memorizedPersons
        }
        >

          <TableContent persons={persons} status={status} loading={loading} />

          {(!loading && !status) ? <b>No persons? :(</b> : null }

          <TableFoot />

        </PersonContext.Provider>

        <Toaster />

      </div>

    </div>
  );
}
export default App;
