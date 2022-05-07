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
    if (status >= 200 && status < 400) {
      _reactToastify.toast.success("Успешное выполнение запроса");
    } else if (status >= 400 && status < 404 || status > 404 && status < 500) {
      _reactToastify.toast.warn("Неверный запрос");
    } else if (status === 404 || status === undefined) {
      _reactToastify.toast.warn("Сущность не найдена в системе");
    } else if (status >= 500) {
      _reactToastify.toast.error("Серверная ошибка");
    } else {
      _reactToastify.toast.error("Неизвестная ошибка");
    } // switch (status){
    //     case 200:
    //         toast.success("Успешное выполнение запроса");
    //         break;
    //     case 400:
    //         toast.warn("Неверный запрос");
    //         break;
    //     case 404:
    //         toast.warn("Сущность не найдена в системе");
    //         break;
    //     case 500:
    //         toast.error("Серверная ошибка");
    //         break;
    //     default:
    //         toast.error("Неизвестная ошибка")
    // }

  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, notify(status));
};

var _default = ReqNotification;
exports.default = _default;
//# sourceMappingURL=ReqNotification.js.map