"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _employeeSquare = _interopRequireDefault(require("../images/employee-square.png"));

var _edit = _interopRequireDefault(require("../images/edit.png"));

var _delete = _interopRequireDefault(require("../images/delete.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersonRow = function PersonRow(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "List Content"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _employeeSquare.default,
    alt: "icon",
    className: "Employee-icon App-icon"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "Employee-name"
  }, props.firstName), /*#__PURE__*/_react.default.createElement("p", {
    className: "Employee-second-name"
  }, props.lastName), /*#__PURE__*/_react.default.createElement("div", {
    className: "Functional-buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "Edit-button",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _edit.default,
    alt: "edit",
    className: "App-icon"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "Delete-button",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _delete.default,
    alt: "delete",
    className: "App-icon"
  }))));
};

var _default = PersonRow;
exports.default = _default;
//# sourceMappingURL=PersonRow.js.map