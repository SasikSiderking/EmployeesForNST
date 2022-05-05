"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReqNotification = function ReqNotification(status) {
  var notify = function notify(status) {
    switch (status) {
      case 200:
        _reactToastify.toast.success("Успешное выполнение запроса");

        break;

      case 400:
        _reactToastify.toast.warn("Неверный запрос");

        break;

      case 404:
        _reactToastify.toast.warn("Сущность не найдена в системе");

        break;

      case 500:
        _reactToastify.toast.error("Серверная ошибка");

        break;

      default:
        _reactToastify.toast.error("Неизвестная ошибка");

    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, notify(status), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null));
};

var _default = ReqNotification;
exports.default = _default;
//# sourceMappingURL=ReqNotification.js.map