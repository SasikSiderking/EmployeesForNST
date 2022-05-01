import './App.css';
import React from "react";
import TableHead from "./Table/TableHead";
import TableContent from "./Table/TableContent";
import TableFoot from "./Table/TableFoot";

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


// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
// }
export default App;
