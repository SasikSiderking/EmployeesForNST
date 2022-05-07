import './App.css';
import React, {useEffect, useState} from "react";
import TableHead from "./Table/TableHead";
import TableContent from "./Table/TableContent";
import TableFoot from "./Table/TableFoot";
import {ToastContainer} from "react-toastify";
import ReqNotification from "./ErrorCatching/ReqNotification";
import PersonContext from "./Context/PersonContext";
import api from "./api/v1"


function App() {
    const [status,setStatus] = useState(null);
    const [loading,setLoading] = useState(true);
    const [persons,setPersons] = useState([]);

    useEffect(() => {
        const getPersons = async () => {
            try{
                const response = await api.get("/persons");
                if(response && response.data){
                    setStatus(response.status);
                    setPersons(response.data);
                    setLoading(false);
                    ReqNotification(response.status)
                }
            }
            catch(err)
            {
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    ReqNotification(err.response.status);
                }
                else{
                    ReqNotification(404);
                    console.log("Error: "+err);
                }
            }
        }
        getPersons();
    },[])

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
