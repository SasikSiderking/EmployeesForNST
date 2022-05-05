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

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Employees-Wrapper"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null), /*#__PURE__*/_react.default.createElement(_TableContent.default, null), /*#__PURE__*/_react.default.createElement(_TableFoot.default, null)));
}

var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map