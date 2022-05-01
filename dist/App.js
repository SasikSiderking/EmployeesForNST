"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./App.css");

var _react = _interopRequireDefault(require("react"));

var _TableHead = _interopRequireDefault(require("./Table/TableHead"));

var _TableContent = _interopRequireDefault(require("./Table/TableContent"));

var _TableFoot = _interopRequireDefault(require("./Table/TableFoot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Employees-Wrapper"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null), /*#__PURE__*/_react.default.createElement(_TableContent.default, null), /*#__PURE__*/_react.default.createElement(_TableFoot.default, null)));
} // function App() {
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


var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map