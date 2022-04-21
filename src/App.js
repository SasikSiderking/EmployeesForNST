import icon from './employee.png'
import edit from './edit.png'
import del from './delete.png'
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="Employees-Wrapper">
          <div className="List Head">
              <div className="First-Name">
                  Имя
              </div>
              <div className="Second-Name">
                  Фамилия
              </div>
              <div className="Functional-Buttons">
                  {/*Действие*/}
              </div>
          </div>
          <div className="List Content">
              <img src={icon} alt="icon" className="App-icon"/>
              <p>Имя</p>
              <p>Фамилия</p>
              <div className="EditButton"><button type="button"><img src={edit} alt="edit" className="App-icon"/></button>
                  <button type="button"><img src={del} alt="delete" className="App-icon"/></button></div>
              {/*<button type="button"><img src={edit} alt="edit" className="App-icon"/></button>*/}
              {/*<button type="button"><img src={del} alt="delete" className="App-icon"/></button>*/}

          </div>
          <div className="List Foot">

          </div>
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
