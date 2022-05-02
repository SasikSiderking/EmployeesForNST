"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var active = _ref.active,
      form = _ref.form;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: active ? "ModalBackground active" : "ModalBackground"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: active ? "ModalContent active" : "ModalContent"
  }, form));
};

var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map