"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeSquare = _interopRequireDefault(require("../images/employee-square.png"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrokenRow = function BrokenRow(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "List Content"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _employeeSquare.default,
    alt: "icon",
    className: "Employee-icon App-icon"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "Employee-name"
  }, props.firstName ? props.firstName.toString() : null), /*#__PURE__*/_react.default.createElement("p", {
    className: "Employee-second-name"
  }, props.lastName ? props.lastName.toString() : null), /*#__PURE__*/_react.default.createElement("small", null, "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0437\u0430\u043F\u0438\u0441\u0438"), /*#__PURE__*/_react.default.createElement("div", {
    className: "Functional-buttons"
  }));
};

var _default = BrokenRow;
exports.default = _default;
//# sourceMappingURL=BrokenRow.js.map