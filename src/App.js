import './App.css';
import React from "react";
import TableHead from "./Table/TableHead";
import TableContent from "./Table/TableContent";
import TableFoot from "./Table/TableFoot";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <div className="App">

      <div className="Employees-Wrapper">

          <TableHead/>

          <TableContent/>

          <TableFoot/>

      </div>

    </div>
  );
}
export default App;
