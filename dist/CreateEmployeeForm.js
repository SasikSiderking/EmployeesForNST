"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./form.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateEmployeeForm = function CreateEmployeeForm(_ref) {
  var setActive = _ref.setActive;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Employee-Form-Wrapper"
  }, /*#__PURE__*/_react.default.createElement("header", null, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"), /*#__PURE__*/_react.default.createElement("div", {
    className: "Form-Content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setActive(false);
    },
    className: "Back-Button"
  }, "\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"
  }), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "Save-Button"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
};

var _default = CreateEmployeeForm;
exports.default = _default;
//# sourceMappingURL=CreateEmployeeForm.js.map