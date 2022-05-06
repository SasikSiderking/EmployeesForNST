import './App.css';
import React, {useState} from "react";
import TableHead from "./Table/TableHead";
import TableContent from "./Table/TableContent";
import TableFoot from "./Table/TableFoot";
import {ToastContainer} from "react-toastify";
import ReqNotification from "./api/ReqNotification";
import NetworkRequest from "./api/NetworkRequest";
import PersonContext from "./Context/PersonContext";

function App() {
    const {data, status, loading} = NetworkRequest("get");
    const [persons,setPersons] = useState([]);
    const [firstLaunch,setFirstLaunch] = useState(true);
    if(status && firstLaunch) {
        ReqNotification(status);
        setFirstLaunch(false);
        setPersons(data);
    }
  return (
    <div className="App">

      <div className="Employees-Wrapper">

          <TableHead/>

          <PersonContext.Provider value={{persons: persons,setPersons: setPersons}}>
              {status? <TableContent persons={persons} status={status} loading={loading}/> : null}

              <TableFoot/>

          </PersonContext.Provider>

          <ToastContainer/>

      </div>

    </div>
  );
}
export default App;
